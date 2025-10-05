"use client";
import React, { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { toast } from "sonner";

const DEFAULT_AVATAR = "https://github.com/shadcn.png";
const DEFAULT_BANNER = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";

type User = {
  id: string;
  name: string;
  email: string;
  image: string;
  bio: string;
  banner?: string;
};

const ProfileClient = ({ user }: { user: User }) => {
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [profileImage, setProfileImage] = useState(user.image || DEFAULT_AVATAR);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const updateProfile = async () => {
    // Simulate update (replace with real API call)
    setTimeout(() => {
      toast.success("Profile updated successfully!", {
        description: "Your changes have been saved.",
      });
    }, 600);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-6 py-12">
      <motion.div
        className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-xl border border-border/40 bg-background/70 backdrop-blur-xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Cover / Banner Section */}
        <div className="relative w-full h-40 overflow-hidden bg-gradient-to-r from-primary/30 to-primary/10">
          <img
            src={user.banner || DEFAULT_BANNER}
            alt="Profile banner"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-background/20" />
        </div>

        {/* Avatar Section */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <button
              className="absolute top-24 left-1/2 -translate-x-1/2 rounded-full ring-4 ring-background focus:outline-none"
              aria-label="Change profile picture"
            >
              <Avatar className="w-28 h-28 ring-2 ring-primary/50 hover:ring-primary/80 transition-all duration-300 shadow-lg">
                <AvatarImage src={profileImage || DEFAULT_AVATAR} alt={name} />
                <AvatarFallback className="text-xl font-semibold">
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-xs">
            <DialogTitle>Change Profile Picture</DialogTitle>
            <Label htmlFor="profile-image" className="mb-2 block">
              Upload new photo
            </Label>
            <Input
              id="profile-image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            <Button
              variant="default"
              className="mt-4 w-full"
              onClick={() => setDialogOpen(false)}
            >
              Done
            </Button>
          </DialogContent>
        </Dialog>

        {/* Profile Details */}
        <div className="flex flex-col items-center text-center mt-20 px-8 pb-10">
          <h2 className="text-2xl font-semibold tracking-tight">{name}</h2>
          <p className="text-sm text-muted-foreground mt-1">{user.email}</p>

          {/* Glassmorphic Form */}
          <motion.div
            className="w-full mt-8 p-6 rounded-2xl bg-background/70 backdrop-blur-xl border border-border/40 shadow-lg space-y-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <motion.div whileHover={{ scale: 1.01 }}>
              <Label htmlFor="name" className="text-sm font-medium">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 bg-background/50 backdrop-blur-sm"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }}>
              <Label htmlFor="bio" className="text-sm font-medium">
                Bio
              </Label>
              <Input
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="mt-1 bg-background/50 backdrop-blur-sm"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }}>
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                value={user.email}
                disabled
                className="mt-1 bg-background/50 opacity-70 cursor-not-allowed"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <Button
                className="w-full mt-6 py-6 text-base font-medium shadow-md hover:shadow-lg transition-all duration-300"
                onClick={updateProfile}
              >
                Update Profile
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
};

export default ProfileClient;

