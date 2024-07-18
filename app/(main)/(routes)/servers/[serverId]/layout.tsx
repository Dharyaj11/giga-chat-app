import ChannelSidebar from "@/components/server/channel-sidebar";
import { currentProf } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const ServerIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { serverId: string };
}) => {
  const profile = await currentProf();

  if (!profile) {
    return redirectToSignIn();
  }
  // esures that only the person who is the meember of that server is able to get sert even if he knows serverid
  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (!server) {
    return redirect("/");
  }

  //Use the fixed utility to position an element relative to the browser window.


  return (
    <div className="h-full ">
      <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
        <ChannelSidebar serverId={params.serverId}></ChannelSidebar>
      </div>
      <main className="h-full md:pl-60">{children}</main>
    </div>
  );
};

export default ServerIdLayout;
