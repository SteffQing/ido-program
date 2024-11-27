const token_info: TokenInfoType = {
  symbol: "GET",
  decimals: 18,
  address: "TBA",
  sale_token_amount: 500000,
};
const pool_info: PoolInfoType = {
  min_alloc: 10,
  max_alloc: 100,
  pool_address: "5NqquHbGYtHysnZWEYTkX7tMQrjsdZJyxSDc1Yc3Mjir",
  access_type: "OPEN ENTRY",
};
const idoExample: IDOType = {
  id: "358che00124",
  project_name: "Green Energy Fund",
  description:
    "A crowdfunding initiative to support renewable energy projects worldwide. VentureMind AI is an advanced Solana-based platform that offers over 150 AI tools and a robotics platform for industries such as construction, education and entertainment. Users will leverage AI driven insights, autonomous agents, tokenized tools for innovative solutions.",
  status: "Upcoming",
  image: "https://picsum.photos/id/237/200/300",
  tags: ["renewable", "eco-friendly", "investment"],
  target: 1000000,
  raised: 550000,
  price: 2.5,
  start_date: "2024-12-01T00:00:00Z",
  end_date: "2024-12-31T23:59:59Z",
  token_info: token_info,
  pool_info: pool_info,
};
const Statuses = ["All", "Upcoming", "Live", "Completed"] as const;

export { idoExample, Statuses };
