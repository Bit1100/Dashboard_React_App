import { useTheme, Typography } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { tokens } from "../../theme";
import { fetchGeography, fetchGeoFeatures } from "../../queries";
import { useQueries } from "react-query";
import { Loader } from "../Utiliities";
// import { useCustomQuery } from "../hooks";

export const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Parallel Queries
  const queryResults = useQueries([
    { queryKey: "geography", queryFn: fetchGeography },
    { queryKey: "geoFeatures", queryFn: fetchGeoFeatures },
  ]);

  const { data, isLoading, isError, error } = queryResults[0];
  const {
    data: geo,
    isLoading: geoIsLoading,
    isError: geoIsError,
    error: geoError,
  } = queryResults[1];

  /* 
  // Parallel Queries with custom useQuery
  const { data, isLoading, isError, error } = useCustomQuery({
    queryKey: "geography",
    fetcherFn: fetchGeography,
  });

  const {
    data: geo,
    isLoading: geoIsLoading,
    isError: geoIsError,
    error: geoError,
  } = useCustomQuery({
    queryKey: "geoFeatures",
    fetcherFn: fetchGeoFeatures,
  }); */

  if (isLoading || geoIsLoading) {
    return <Loader loading={isLoading} />;
  }

  if (isError || geoIsError) {
    return isError ? (
      <Typography variant="h2">{error.message}</Typography>
    ) : (
      <Typography variant="h2">{geoError.message}</Typography>
    );
  }

  return (
    <ResponsiveChoropleth
      data={data?.data?.geography}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      features={geo?.data?.geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};
