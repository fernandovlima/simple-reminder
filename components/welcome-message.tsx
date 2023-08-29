import { currentUser } from "@clerk/nextjs";
import { delay } from "@/lib/delay";

export async function WelcomeMessage() {
  const user = await currentUser();

  if (!user) return <div>error</div>;

  return (
    <div className={""}>
      <h1 className={"text-2xl"}>
        Welcome,{" "}
        <span className={"fuchsia-cyan-gradient font-bold"}>
          {user?.firstName}
        </span>
      </h1>
    </div>
  );
}
