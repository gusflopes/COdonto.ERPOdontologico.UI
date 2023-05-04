import { api } from './index';

export const getDentistas = async () => {
  const response = await api.get("/dentistas");
  return response.data;
};
export const getDentista = async (dentistaId: string) => {
  const response = await api.get(`/dentistas/${dentistaId}}`);
  return response.data;
};
export const createDentista = async (dentista: any) => {
  const response = await api.post("/dentistas", dentista);
  return response.data;
};
export const updateDentista = async (dentistaId: string, updatedDentista: any) => {
  const response = await api.put(`/dentistas/${dentistaId}`, updatedDentista);
  return response.data;
};
export const deleteDentista = async (dentistaId: string) => {
  const response = await api.delete(`/dentistas/${dentistaId}`);
  return response.data;
};