// * Añadimos una capa de abstracción para el día de mañana queremos reemplazar 'react-redux' lo realizamos desde acá

import { useSelector, useDispatch } from "./react-redux";

  export const useDispatchApp = useDispatch;
  export const useSelectorApp = useSelector;
