import { ITrendingVideo, pipedApi } from "@/service/piped.service";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "yui-uikit";

export const MainPage = () => {
  const navigate = useNavigate();
  const [trendings, setTrendings] = useState<ITrendingVideo[]>([]);

  const onTrendingVideoClickHandler = (video: ITrendingVideo) => {
    navigate(video.url);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await pipedApi.getTrending("US");
      if (result) {
        setTrendings(result);
      }
    };
    fetchData();
  }, []);

  if (!trendings) return <Loader />;
  return (
    <div>
      <Typography size="h3">123</Typography>
      <Button>123</Button>

      {trendings.map((video) => {
        return (
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {video.title}
            <Button onClick={() => onTrendingVideoClickHandler(video)}>
              Watch
            </Button>
          </div>
        );
      })}
    </div>
  );
};
