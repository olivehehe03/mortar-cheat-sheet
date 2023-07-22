import React, { useEffect, useRef } from "react";
import katex from "katex";
import { FireMission } from "../../types/FireMission";

interface Props {
  fireMission?: FireMission;
}

const Formula = (props: Props) => {
  const { fireMission } = props;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      if (fireMission) {
        katex.render(
          `EL=${fireMission.estimatedElevation || 0}+(\\frac{${
            fireMission.height || 0
          }-${fireMission.targetHeight || 0}}{100}\\times{${
            fireMission.dElev || 0
          }})`,
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
