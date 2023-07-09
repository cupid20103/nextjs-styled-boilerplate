import type { NextApiRequest, NextApiResponse } from "next";

import type { HelloType } from "@/libs/types";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<HelloType>
) {
	res.status(200).json({ name: "Kiyoshi Araki", age: 27 });
}
