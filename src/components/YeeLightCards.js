import { get, isEqual } from "lodash";
import store from "@store";
import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { PanelSection } from "@packages/widgets-homekit-react-components/src";
import YeeLight from "@components/YeeLight";

const AutoFlowContainer = styled(PanelSection)`
  margin-top: 0;
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 100%;
  gap: 1em 0;
  white-space: pre-wrap;
  max-width: 100%;
`;

const lightReducer = (acc, state) => {
  const [domain, entity] = state.entity_id.split(".");
  const [integration, deviceType, id, component = "default"] =
    entity.split("_");
  return {
    ...acc,
    [id]: {
      ...acc[id],
      id,
      domains: new Set([...get(acc, [id, "domains"], []), domain]),
      integrations: new Set([
        ...get(acc, [id, "integrations"], []),
        integration,
      ]),
      deviceTypes: new Set([...get(acc, [id, "deviceTypes"], []), deviceType]),
      components: new Set([...get(acc, [id, "components"], []), component]),
      [component]: {
        ...get(acc, [id, component]),
        [domain]: {
          ...state,
          meta: { domain, integration, deviceType, id, component },
        },
      },
    },
  };
};

const YeeLightCards = () => {
  const lights = store.hass.use(({ states }) => {
    const lightsMap = Object.values(states)
      .filter((state) => state.entity_id.includes("yeelight"))
      .reduce(lightReducer, {});
    return Object.values(lightsMap).map((light) => {
      const state = get(light.default, "light.state", "offline");
      const entity_id = get(light, "default.light.entity_id");
      const id = get(light, "id");
      return { id, entity_id, state };
    });
  }, isEqual);
  useEffect(() => console.log({ lights }), [lights]);
  console.log("cards rendered");
  return (
    <AutoFlowContainer>
      {lights.map((light) => (
        <YeeLight
          key={light.id}
          state={light.state}
          entity_id={light.entity_id}
          id={light.id}
        />
      ))}
    </AutoFlowContainer>
  );
};

export default YeeLightCards;
