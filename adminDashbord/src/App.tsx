import { RouterProvider } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import router from "./routers/Router"
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer position="top-right"  // Position of the toast
        autoClose={3000}      // Auto close in 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </div>
  )
}

export default App