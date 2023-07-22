import styles from "./FireMission.module.scss";
import { FireMission as FireMissionType } from "../../types/FireMission";
import { Field, Formik } from "formik";
import Formula from "../formula/Formula";
import Autosave from "../autosave/Autosave";

interface Props {
  fireMission: FireMissionType;
  handleUpdateFireMission: (fireMission: FireMissionType) => void;
  handleDeleteFireMission: (id: string) => void;
}

const FireMission = (props: Props) => {
  const { fireMission, handleUpdateFireMission, handleDeleteFireMission } =
    props;

  return (
    <Formik
      initialValues={fireMission}
      onSubmit={(values, { setSubmitting }) => {
        handleUpdateFireMission(values);
        setSubmitting(false);
      }}
    >
      {({ values }) => (
        <div className={styles.fireMission}>
          <div className={styles.header}>
            <div className={styles.name}>
              <label>Name</label>
              <Field name="name" type="text" className={styles.nameInput} />
            </div>
            <button
              onClick={() => {
                const confirmDelete = window.confirm(
                  `Are you sure you want to delete ${
                    fireMission.name || "this fire mission"
                  }?`
                );

                if (confirmDelete) {
                  handleDeleteFireMission(fireMission.id);
                }
              }}
            >
              Delete
            </button>
          </div>
          <div className={styles.content}>
            <div className={styles.elevation}>
              <div className={styles.heading}>Elevation calculation</div>
              <div className={styles.column}>
                <div className={styles.field}>
                  <label>
                    Height<sub>you</sub>
                  </label>
                  <Field name="height" type="number" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label>
                    Height<sub>target</sub>
                  </label>
                  <Field
                    name="targetHeight"
                    type="number"
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label>Range</label>
                  <Field name="range" type="number" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label>
                    Elevation<sub>est</sub>
                  </label>
                  <Field
                    name="estimatedElevation"
                    type="number"
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label>D elev / 100m</label>
                  <Field name="dElev" type="number" className={styles.input} />
                </div>
              </div>
            </div>
            <div className={styles.main}>
              <div className={styles.remarks}>
                <label>Remarks</label>
                <Field name="remarks" as="textarea" className={styles.input} />
              </div>
              <div className={styles.formula}>
                <Formula fireMission={values} />
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.heading}>Fire mission info</div>
              <div className={styles.column}>
                <div className={styles.field}>
                  <label>Rounds</label>
                  <Field name="rounds" type="number" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label>Azimuth</label>
                  <Field
                    name="azimuth"
                    type="number"
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label>Charge</label>
                  <Field name="charge" type="number" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label>Elevation</label>
                  <Field
                    name="elevation"
                    type="number"
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label>Flight time</label>
                  <Field
                    name="flightTime"
                    type="number"
                    className={styles.input}
                  />
                </div>
              </div>
            </div>
          </div>
          <Autosave />
        </div>
      )}
    </Formik>
  );
};

export default FireMission;
