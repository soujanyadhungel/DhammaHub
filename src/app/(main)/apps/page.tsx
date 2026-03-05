import { vipassanaApps } from "@/data/apps";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, Globe, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

const categoryLabels: Record<string, string> = {
  official: "Official",
  timer: "Timer",
  community: "Community",
  learning: "Learning",
};

export default function AppsPage() {
  const categories = ["official", "timer", "learning", "community"];

  return (
    <div className="space-y-8 animate-fade-in">
      <p className="text-sm text-brown-300 dark:text-beige-200">
        A curated directory of apps and tools for Vipassana practitioners in the Goenka tradition.
      </p>

      {categories.map((cat) => {
        const appsInCat = vipassanaApps.filter((a) => a.category === cat);
        if (!appsInCat.length) return null;
        return (
          <section key={cat}>
            <h2 className="section-title mb-4">{categoryLabels[cat]} Apps</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {appsInCat.map((app) => (
                <div key={app.id} className="card p-5 flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-beige-100 dark:bg-brown-300 flex items-center justify-center flex-shrink-0">
                      {app.platforms.includes("web") && !app.platforms.includes("ios") ? (
                        <Globe size={20} className="text-brown-300 dark:text-beige-200" />
                      ) : (
                        <Smartphone size={20} className="text-brown-300 dark:text-beige-200" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-brown-500 dark:text-cream">{app.name}</p>
                      <p className="text-xs text-brown-200 dark:text-beige-300 mt-0.5">{app.developer}</p>
                    </div>
                    {app.isFree && <Badge variant="green">Free</Badge>}
                  </div>

                  <p className="text-sm text-brown-300 dark:text-beige-200 leading-relaxed flex-1">
                    {app.description}
                  </p>

                  {/* Platform badges */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {app.platforms.map((p) => (
                      <Badge key={p} variant="outline" className="capitalize">
                        {p === "ios" ? "iOS" : p === "android" ? "Android" : "Web"}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className={cn("flex gap-2 mt-3", "flex-wrap")}>
                    {app.webUrl && (
                      <a
                        href={app.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs flex items-center gap-1"
                      >
                        Open <ExternalLink size={11} />
                      </a>
                    )}
                    {app.iosUrl && (
                      <a
                        href={app.iosUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs flex items-center gap-1"
                      >
                        App Store <ExternalLink size={11} />
                      </a>
                    )}
                    {app.androidUrl && (
                      <a
                        href={app.androidUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs flex items-center gap-1"
                      >
                        Google Play <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
