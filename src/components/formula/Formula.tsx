import { useEffect, useMemo, useRef } from "react";
import katex from "katex";
import { FireMission } from "../../types/FireMission";

interface Props {
  fireMission?: FireMission;
}

const Formula = (props: Props) => {
  const { fireMission } = props;

  const ref = useRef<HTMLDivElement>(null);

  const formula = useMemo(
    () =>
      `EL=${fireMission?.estimatedElevation || "EL_{est}"}+(\\frac{${
        fireMission?.height || "Height_{you}"
      }-${fireMission?.targetHeight || "Height_{target}"}}{100}\\times{${
        fireMission?.dElev || "\\text{D ELEV per 100m DR}"
      }})`,
    [fireMission]
  );

  useEffect(() => {
    if (ref.current) {
      katex.render(formula, ref.current);
    }
  });

  return <div ref={ref} />;
};

export default Formula;
