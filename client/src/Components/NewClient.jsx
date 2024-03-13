import { useForm } from "react-hook-form";
import TextInput from "./TextInput";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function NewClient() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch ("http://localhost:3001/clientes/new", {
      method: "POST",
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      toast("Erro na criação do cliente", { type: "error", theme: "colored" });
    } else {
      toast("Cliente criado!", { type: "success", theme: "colored" });
    }
    navigate("/");
  };

  return (
    <div className="flex justify-center h-screen w-screen" >
      <div className="flex flex-col h-[95vh] mt-5 w-100 bg-gray-100 shadow-md" >
      <div className="font-light ml-4 mt-3 text-lg" >Novo Cliente</div>
          <form className="flex flex-col px-4" onSubmit={handleSubmit(onSubmit)}>
            <TextInput placeholder="Nome" register={register("nome", { required: true })} />
            {errors.nome && <span className="text-red-600" >Campo Obrigatório</span>}
            <TextInput placeholder="Email" register={register("email", { required: true })} />
            {errors.email && <span className="text-red-600" >Campo Obrigatório</span>}
            <TextInput placeholder="Telefone" register={register("telefone", { required: true })} />
            {errors.telefone && <span className="text-red-600" >Campo Obrigatório</span>}
            <TextInput placeholder="Coordenadas" register={register("coordenadas", { required: true })} />
            {errors.coordenadas && <span className="text-red-600 mb-2" >Campo Obrigatório</span>}
            <input className="rounded-md bg-[#003399] text-[#FFF] font-light p-2 shadow-sm" type="submit" value="Salvar" />
          </form>
      </div>
    </div>
  );
}

//();