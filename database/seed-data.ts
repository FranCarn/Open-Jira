interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa sem, mattis eget tellus in, commodo commodo eros. Ut mollis ultrices finibus. Donec id mi eget lacus aliquet dignissim. Nulla maximus augue ut mi semper, et elementum ligula auctor. Phasellus fermentum, risus id viverra vulputate, est mi pellentesque sapien, ac dapibus felis lectus eu tellus. Morbi sed dictum odio. Maecenas nec fermentum libero. Ut elementum ligula a molestie tempus.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description:
        "In nibh nunc, dignissim eu tempor in, sollicitudin sed ex. Duis faucibus pharetra dui, nec semper diam tincidunt quis. Nam interdum condimentum lacinia. Etiam erat velit, ullamcorper eget porta eget, suscipit eu ipsum. Praesent blandit volutpat quam quis interdum. In at tincidunt nisl. Integer eu pretium diam. Fusce congue nisl eu blandit volutpat. Proin magna nunc, imperdiet eget ultrices et, laoreet non nisl. Phasellus in ultrices felis. Nulla fermentum luctus ligula at bibendum. Fusce tristique quam et lectus consectetur, non sollicitudin sapien ornare",
      status: "in-progress",
      createdAt: Date.now() - 100000,
    },
    {
      description:
        "Proin vestibulum facilisis quam, ut elementum metus fringilla vel. Donec molestie nulla vel nisl vestibulum, eu ultricies erat rutrum. Aenean a sapien lectus. Praesent tempor maximus diam, in vestibulum ex viverra eget. Vivamus vehicula efficitur nulla non viverra. Donec massa odio, placerat vel semper et, blandit ut metus. Mauris posuere justo eget leo euismod, ut rutrum magna congue.",
      status: "finished",
      createdAt: Date.now() - 100000000,
    },
  ],
};
