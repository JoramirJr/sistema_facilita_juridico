import ClientList from "./ClientList";

export default function UIShell() {
  return (
    <div>
      <header className="shadow-md px-3 py-6 flex justify-between">
      <img src="./facilita_logo.webp" width="50" height="60" alt="Facilita Jurídico Logo"/>
      </header>
      <ClientList />
    </div>
  );
}