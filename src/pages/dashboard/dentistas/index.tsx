import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useApi } from "../../../hooks/useApi/index";

type Dentista = {
  id: string;
  nome?: string;
  cro?: string;
  cpf?: string;
  especialidades?: string;
  comissao?: number;
};

export default function Dentistas() {
  const { getDentistas, updateDentista, createDentista } = useApi();
  // const api = new useApi();
  const [dentistas, setDentistas] = useState<Dentista[]>([]);

  const getInitialData = async () => {
    const dentistas: Dentista[] = await getDentistas();
    setDentistas(dentistas);
    console.log(dentistas);
  };

  const imageUrl =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60";

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <div>
      <h1 className="mb-12 text-3xl font-bold">DENTISTAS</h1>
      <ul
        role="list"
        className="grid grid-cols-1 gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {dentistas &&
          dentistas.map((dentista) => (
            <li
              key={dentista.id}
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow-2xl shadow-slate-300 drop-shadow"
            >
              <div className="flex flex-1 flex-col p-8">
                <img
                  className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                  src={imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-sm font-medium text-gray-900">
                  {dentista.nome}
                </h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-sm text-gray-500">
                    {dentista.especialidades}
                  </dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="mt-3">
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      Dentista
                      {/* {dentista.role} */}
                    </span>
                  </dd>
                </dl>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1">
                    <a
                      href={`mailto:dentista@hublaw.com.br`}
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                      <EnvelopeIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Email
                    </a>
                  </div>
                  <div className="-ml-px flex w-0 flex-1">
                    <a
                      href={`tel:+5567992638484`}
                      className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                      <PhoneIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
