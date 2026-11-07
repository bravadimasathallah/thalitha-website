import MinumanPage from "./variants/p5/pages/ThalitaFriedChickenMenuMinuman";
import Minigame from "./pages/Minigame";
import {useLayoutEffect} from "react";
import { usePressFeedback } from "./hooks/usePressFeedback";
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Outlet,Route,Link,useLocation} from "react-router-dom";
import P0 from "./variants/p1/pages/ThalithaFriedChickenHOME";
import P1 from "./variants/p1/pages/ThalitaFriedChickenMenu";
import P2 from "./variants/p2/pages/ThalitaFriedChickenMenuHotSpicy";
import P3 from "./variants/p2/pages/ThalitaFriedChickenMenuKeju";
import P4 from "./variants/p3/pages/ThalitaFriedChickenMenuGeprek";
import P5 from "./variants/p3/pages/ThalitaFriedChickenMenuPaketNasi";
import P6 from "./variants/p3/pages/ThalitaFriedChickenMenuPelengkap";
import P7 from "./variants/p4/pages/LokasiCabangThalitaFriedChicken";
import P8 from "./variants/p4/pages/LokasiCabangThalitaFriedChicken1";
import "./variants/p1/global.css";
import "./variants/p2/global.css";
import "./variants/p3/global.css";
import "./variants/p4/global.css";
import "./variants/p5/global.css";
function PageRouter() {
  const location = useLocation();
  usePressFeedback();
  useLayoutEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    let id = location.hash.slice(1);
    try {
      id = decodeURIComponent(id);
    } catch {
      // An invalid URL fragment must not prevent the page from rendering.
    }
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(id);
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (target) {
        target.scrollIntoView({ behavior: reduceMotion ? "instant" : "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, location.key]);
 return (
   <div
     key={location.pathname}
     className="page-transition"
     data-native-transitions={typeof document.startViewTransition === "function"}
   >
     <Outlet />
   </div>
 );
}

// Register every screen with the data router so links and history transitions
// share the same coordinator, including rapid or interrupted navigation.
const router = createBrowserRouter(createRoutesFromElements(
<Route element={<PageRouter />}>
<Route path="/" element={<div className="variant-p1"><P0/></div>} />
<Route path="/menu" element={<div className="variant-p1"><P1/></div>} />
<Route path="/menu/hot-spicy" element={<div className="variant-p2"><P2/></div>} />
<Route path="/menu/keju" element={<div className="variant-p2"><P3/></div>} />
<Route path="/menu/geprek" element={<div className="variant-p3"><P4/></div>} />
<Route path="/menu/paket-nasi" element={<div className="variant-p3"><P5/></div>} />
<Route path="/menu/minuman" element={<div className="variant-p5"><MinumanPage/></div>} />
<Route path="/menu/pelengkap" element={<div className="variant-p3"><P6/></div>} />
<Route path="/lokasi" element={<div className="variant-p4"><P7/></div>} />
<Route path="/minigame" element={<div className="variant-p1"><Minigame/></div>} />
<Route path="/lokasi/daftar" element={<div className="variant-p4"><P8/></div>} /><Route path="*" element={<div style={{padding:40}}><h2>Halaman tidak ditemukan</h2><Link viewTransition to="/">Kembali ke Beranda</Link></div>}/>
</Route>));
export default function App(){return <RouterProvider router={router}/>}
