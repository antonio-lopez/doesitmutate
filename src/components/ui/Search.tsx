import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import React from "react";

const Search = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command className="w-full rounded-lg border md:w-[26.25rem]">
      <CommandInput
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        placeholder="Type a command or search..."
      />
      {open && (
        <CommandList className="absolute top-10 z-10 max-h-[300px] w-full">
          <CommandItem> one </CommandItem>
          <CommandItem> two </CommandItem>
          <CommandItem> three </CommandItem>
          <CommandItem> four </CommandItem>
          <CommandItem> five </CommandItem>
        </CommandList>
      )}
    </Command>
  );
};

export default Search;
