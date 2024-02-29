import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import React from "react";

interface MethodProps {
  methods: any;
}

const Search = ({ methods }: MethodProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Command className="w-full rounded-lg border md:w-[26.25rem]">
      <CommandInput
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        placeholder="Search for method..."
      />
      {open && (
        <CommandList className="absolute top-10 z-10 max-h-[300px] w-full md:w-[26.25rem]">
          {methods.map((method: any) => (
            <CommandItem
              key={method.data.title}
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <a className="w-full" href={`#${method.data.title}`}>
                {method.data.title}
              </a>
            </CommandItem>
          ))}
        </CommandList>
      )}
    </Command>
  );
};

export default Search;
