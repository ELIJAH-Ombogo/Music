jsx
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GlenEntertainment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <header className="p-6 text-center border-b border-gray-700">
        <motion.h1
          className="text-4xl font-bold tracking-widest text-blue-400 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          GLEN ENTERTAINMENT
        </motion.h1>
        <p className="text-gray-400 mt-2">Watch • Listen • Enjoy</p>
      </header>

      <main className="p-6 grid md:grid-cols-2 gap-6">
        <Card className="bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-3 text-red-400">YouTube</h2>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-3 text-green-400">Spotify</h2>
            <iframe
              className="rounded-xl"
              src="https://open.spotify.com/embed/track/7ouMYWpwJ422jRcDASZB7P"
              width="100%"
              height="380"
              frameBorder="0"
              allow="encrypted-media"
            ></iframe>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-3 text-pink-400">TikTok</h2>
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@scout2015/video/6718335390845095173"
              data-video-id="6718335390845095173"
              style={{ maxWidth: "605px", minWidth: "325px" }}
            ></blockquote>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
