import { useEffect, useMemo, useRef } from "react";
import katex from "katex";
import { FireMission } from "../../types/FireMission";

interface Props {
  fireMission?: FireMission;
  mode: "elevation" | "elevationEstimate";
}

const Formula = (props: Props) => {
  const { fireMission, mode } = props;

  const ref = useRef<HTMLDivElement>(null);

  const formula = useMemo(() => {
    if (mode === "elevation") {
      return `EL=${fireMission?.estimatedElevation || "EL_{est}"}+(\\frac{${
        fireMission?.height || "Height_{you}"
      }-${fireMission?.targetHeight || "Height_{target}"}}{100}\\times{${
        fireMission?.dElev || "\\text{D ELEV per 100m DR}"
      }})`;
    } else {
      return `EL_{est}=EL_{low}-\\frac{\\text{metres above low range estimate}}{50}\\times{(EL_{low}-EL_{high})}`;
    }
  }, [fireMission]);

  useEffect(() => {
    if (ref.current) {
      katex.render(formula, ref.current);
    }
  });

  return <div ref={ref} />;
};

export default Formula;
