import { reelsData } from "../../utils/data";

export default function handler(req, res) {
  const { page = 1, limit = 5 } = req.query;

  const pageNumber = parseInt(page, 10);
  const limitNumber = parseInt(limit, 10);

  const startIndex = (pageNumber - 1) * limitNumber;
  const endIndex = pageNumber * limitNumber;

  const paginatedData = reelsData.slice(startIndex, endIndex);
  const hasMore = endIndex < reelsData.length;

  res.status(200).json({
    data: paginatedData,
    page: pageNumber,
    limit: limitNumber,
    hasMore,
  });
}
