import {Route, Routes /*, Navigate */} from 'react-router-dom';
import { DetailPage, FormPage, HomePage, LandigPage } from '../pages';


export const AppRouter = () => {
  return(
    <Routes>
      <Route path='/*' element={<LandigPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/country/:name' element={<DetailPage/>}/>
      <Route path='/activities' element={<FormPage/>}/>
    </Routes>
  )
}