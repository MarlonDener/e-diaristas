import SafeEnvironment from "ui/components/feedback/safeEnvironment/safeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle="Preencha seu endereço e veja todos os profissionais da sua localidade"
      />
      <UserInformation
        name={"Marlon Dener"}
        picture={"https://github.com/MarlonDener.png"}
        rating={3}
        description={"São Paulo"}
      />
      <UserInformation
        name={"Marlon Dener"}
        rating={3}
        description={"São Paulo"}
      />
    </div>
  );
}
