import { api } from './index';

export const getPacientes = async () => {
  const response = await api.get("/pacientes");
  return response.data;
}
export const createPaciente = async (paciente: string) => {
  const response = await api.post("/pacientes", paciente);
  return response.data;
}
export const updatePaciente = async (pacienteId: string, updatedPaciente: any) => {
  const response = await api.put(`/pacientes/${pacienteId}`, updatedPaciente);
  return response.data;
}
export const deletePaciente = async (pacienteId: string) => {
  const response = await api.delete(`/pacientes/${pacienteId}`);
  return response.data;
}

export const getPacienteEndereco = async (pacienteId: string) => {
  const response = await api.get(`/pacientes/${pacienteId}/enderecos`);
  return response.data;
}
export const updatePacienteEndereco = async (pacienteId: string, updatedEndereco: any) => {
  const response = await api.put(`/pacientes/${pacienteId}/enderecos`, updatedEndereco);
  return response.data;
}
export const deletePacienteEndereco = async (pacienteId: string) => {
  const response = await api.delete(`/pacientes/${pacienteId}/enderecos`);
  return response.data;
}