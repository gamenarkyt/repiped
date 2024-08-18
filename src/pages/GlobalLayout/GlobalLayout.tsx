import { BottomNavigation } from "@/components/BottomNavigation/BottomNavigation";
import { EllipsisVertical, Home, Settings, User } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button, Header, Popup, Typography } from "yui-uikit";
import styles from "./GlobalLayout.module.css";

export const GlobalLayout = () => {
  const navigate = useNavigate();

  const bottomNavigationListItems = [
    {
      id: "feed",
      icon: <Home />,
      title: "Feed",
      path: "/",
    },
    {
      id: "settings",
      icon: <Settings />,
      title: "Settings",
      path: "/settings",
    },
    {
      id: "profile",
      icon: <User />,
      title: "Profile",
      path: "/profile",
    },
  ];

  const onHeaderTitleClickHandler = () => {
    navigate("/");
  };

  const onPopupSettingsClickHandler = () => {
    navigate("/settings");
  };

  return (
    <div className={styles.globallayout}>
      <Header
        leftSlot={
          <Typography size="h2" onClick={onHeaderTitleClickHandler}>
            Repiped
          </Typography>
        }
        rightSlot={
          <Popup
            position="left"
            listItems={[
              {
                id: "settings",
                title: "Settings",
                icon: <Settings />,
                onClick: onPopupSettingsClickHandler,
              },
            ]}
          >
            <EllipsisVertical size={"20px"} />
          </Popup>
        }
      />
      <main className={styles.main}>
        <Outlet />
      </main>
      <BottomNavigation listItems={bottomNavigationListItems} />
    </div>
  );
};
