import { useState } from "react";
import "./App.css";
import { FireMission } from "./types/FireMission";

const App = () => {
  const [fireMissions, setFireMissions] = useState<FireMission[]>([]);

  const updateFireMission = (updatedFireMission: FireMission) => {
    const updatedFireMissions = fireMissions.map((fireMission) =>
      fireMission.id === updatedFireMission.id
        ? updatedFireMission
        : fireMission
    );
    setFireMissions(updatedFireMissions);
  };

  console.log(fireMissions);

  return (
    <div>
      <h1>Mortar elevation cheat sheet</h1>
      <div className="fireMissions">
        {fireMissions.map((fireMission) => {
          return (
            <div key={fireMission.id} className="fireMission">
              <div className="elevationCalculation">
                <div>
                  <span>Elevation calculation</span>
                </div>
                <div>
                  <span>Height (you)</span>
                  <input
                    value={fireMission.height}
                    onChange={(e) =>
                      updateFireMission({
                        ...fireMission,
                        height: e.currentTarget.value,
                      })
                    }
                  />
                </div>
                <div>
                  <span>Height (target)</span>
                  <input
                    value={fireMission.targetHeight}
                    onChange={(e) =>
                      updateFireMission({
                        ...fireMission,
                        targetHeight: e.currentTarget.value,
                      })
                    }
                  />
                </div>
                <div>
                  <span>Range</span>
                  <input
                    value={fireMission.range}
                    onChange={(e) =>
                      updateFireMission({
                        ...fireMission,
                        range: e.currentTarget.value,
                      })
                    }
                  />
                </div>
                <div>
                  <span>Elevation (estimate)</span>
                  <input
                    value={fireMission.estimatedElevation}
                    onChange={(e) =>
                      updateFireMission({
                        ...fireMission,
                        estimatedElevation: e.currentTarget.value,
                      })
                    }
                  />
                </div>
                <div>
                  <span>D elev / 100m</span>
                  <input
                    value={fireMission.dElev}
                    onChange={(e) =>
                      updateFireMission({
                        ...fireMission,
                        dElev: e.currentTarget.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="formula">
                <p>Remarks</p>
                <textarea
                  value={fireMission.remarks}
                  onChange={(e) =>
                    updateFireMission({
                      ...fireMission,
                      remarks: e.currentTarget.value,
                    })
                  }
                />
              </div>
              <div className="info">
                <div>
                  <span>Fire mission info</span>
                </div>
                <div>
                  <span>Rounds</span>
                  <input
                    value={fireMission.rounds}
                    onChange={(e) =>
                      updateFireMission({
                        ...fireMission,
                        rounds: e.currentTarget.value,
                      })
                    }
                  />
                </div>
                <div>
                  <span>Azimuth</span>
                  <input
                    value={fireMission.azimuth}
                    onChange={(e) =>
                      updateFireMission({
                        ...fireMission,
                        azimuth: e.currentTarget.value,
                      })
                    }
                  />
                </div>
                <div>
                  <span>Change</span>
                  <input
                    value={fireMission.charge}
                    onChange={(e) =>
                      updateFireMission({
                        ...fireMission,
                        charge: e.currentTarget.value,
                      })
                    }
                  />
                </div>
                <div>
                  <span>Elevation</span>
                  <input
                    value={fireMission.elevation}
                    onChange={(e) =>
                      updateFireMission({
                        ...fireMission,
                        elevation: e.currentTarget.value,
                      })
                    }
                  />
                </div>
                <div>
                  <span>Flight time</span>
                  <input
                    value={fireMission.flightTime}
                    onChange={(e) =>
                      updateFireMission({
                        ...fireMission,
                        flightTime: e.currentTarget.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() =>
          setFireMissions([
            ...fireMissions,
            {
              id: crypto.randomUUID(),
              name: "",
              height: "",
              targetHeight: "",
              range: "",
              estimatedElevation: "",
              dElev: "",
              rounds: "",
              azimuth: "",
              charge: "",
              elevation: "",
              flightTime: "",
              remarks: "",
            },
          ])
        }
      >
        Add fire mission
      </button>
    </div>
  );
};

export default App;
