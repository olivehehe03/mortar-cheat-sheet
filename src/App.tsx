import { useEffect, useMemo, useState } from "react";
import styles from "./App.module.scss";
import { FireMission as FireMissionType } from "./types/FireMission";
import FireMission from "./components/fire-mission/FireMission";
import Formula from "./components/formula/Formula";

const App = () => {
  const [fireMissions, setFireMissions] = useState<FireMissionType[]>([]);
  const [lastSaved, setLastSaved] = useState<Date>(new Date());
  const [search, setSearch] = useState("");

  const handleUpdateFireMission = (updatedFireMission: FireMissionType) => {
    const updatedFireMissions = fireMissions.map((fireMission) =>
      fireMission.id === updatedFireMission.id
        ? updatedFireMission
        : fireMission
    );
    setFireMissions(updatedFireMissions);
    setLastSaved(new Date());
    window.localStorage.setItem(
      "fireMissions",
      JSON.stringify(updatedFireMissions)
    );
  };

  const handleDeleteFireMission = (id: string) => {
    const updatedFireMissions = fireMissions.filter(
      (fireMission) => fireMission.id !== id
    );
    setFireMissions(updatedFireMissions);
    setLastSaved(new Date());
    window.localStorage.setItem(
      "fireMissions",
      JSON.stringify(updatedFireMissions)
    );
  };

  const handleDeleteAllFireMissions = () => {
    setFireMissions([]);
    setLastSaved(new Date());
    window.localStorage.removeItem("fireMissions");
  };

  useEffect(() => {
    const savedFireMissions = window.localStorage.getItem("fireMissions");

    if (savedFireMissions) {
      setFireMissions(JSON.parse(savedFireMissions));
    }
  }, []);

  const filteredFireMissions = useMemo(
    () =>
      search
        ? fireMissions.filter((fireMission) =>
            fireMission.name.toLowerCase().includes(search.toLowerCase())
          )
        : fireMissions,
    [search, fireMissions]
  );

  return (
    <div className={styles.app}>
      <h1>Mortar elevation cheat sheet</h1>
      <Formula mode="elevationEstimate" />
      <Formula mode="elevation" />
      <div className={styles.header}>
        <div className={styles.search}>
          <label>Search</label>
          <input
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
        </div>
        <button
          onClick={() => {
            const confirmDeleteAll = window.confirm(
              "Are you sure you want to delete all fire missions?"
            );

            if (confirmDeleteAll) {
              handleDeleteAllFireMissions();
            }
          }}
        >
          Delete all
        </button>
      </div>
      <div className={styles.fireMissions}>
        {filteredFireMissions.map((fireMission) => (
          <FireMission
            key={fireMission.id}
            fireMission={fireMission}
            handleUpdateFireMission={handleUpdateFireMission}
            handleDeleteFireMission={handleDeleteFireMission}
          />
        ))}
      </div>
      <button
        onClick={() =>
          setFireMissions([
            ...fireMissions,
            {
              id: crypto.randomUUID(),
              name: "New Fire Mission",
              height: 0,
              targetHeight: 0,
              range: 0,
              estimatedElevation: 0,
              dElev: 0,
              rounds: 0,
              azimuth: 0,
              charge: 0,
              elevation: 0,
              flightTime: 0,
              remarks: "",
              isLocked: false,
            },
          ])
        }
      >
        Add fire mission
      </button>
      <div
        className={styles.lastSaved}
      >{`Last saved at ${lastSaved.toLocaleTimeString()}`}</div>
    </div>
  );
};

export default App;
