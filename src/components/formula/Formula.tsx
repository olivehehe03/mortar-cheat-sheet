import { useEffect, useMemo, useRef } from "react";
import katex from "katex";
import { FireMission } from "../../types/FireMission";

interface Props {
  fireMission?: FireMission;
}

const Formula = (props: Props) => {
  const { fireMission } = props;

  const ref = useRef<HTMLDivElement>(null);

  const isValidFireMission = useMemo(
    () =>
      fireMission?.estimatedElevation &&
      fireMission?.height &&
      fireMission?.targetHeight &&
      fireMission?.dElev,
    [fireMission]
  );

  useEffect(() => {
    if (ref.current) {
      if (fireMission && isValidFireMission) {
        katex.render(
          `EL=${fireMission.estimatedElevation}+(\\frac{${fireMission.height}-${fireMission.targetHeight}}{100}\\times{${fireMission.dElev}})`,
          ref.current
        );
      } else {
        katex.render(
          `EL=EL_{est}+(\\frac{Height_{you}-Height_{target}}{100}\\times{DELEV per 100m DR})`,
          ref.current
        );
      }
    }
  });

  return <div ref={ref} />;
};

export default Formula;
