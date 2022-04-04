import { Routes, Route } from "react-router-dom";

import ClassStopWatches from './ClassStopwatches';

function Router() {
    return (
        <Routes>
        <Route path="/:id" element={<ClassStopWatches />} />
        <Route path="/" element={<ClassStopWatches />} />
      </Routes>
    )
}

export default Router;