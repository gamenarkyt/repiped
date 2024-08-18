import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { MainPage } from "@/pages/MainPage/MainPage";
import { GlobalLayout } from "@/pages/GlobalLayout/GlobalLayout";
import { NotFound } from "@/pages/NotFound/NotFound";
import { WatchPage } from "@/pages/WatchPage/WatchPage";
import { SettingsPage } from "@/pages/SettingsPage/SettingsPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<GlobalLayout />}>
      <Route path="/" element={<MainPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/watch" element={<WatchPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
