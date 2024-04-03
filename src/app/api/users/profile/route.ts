import { connect } from "@/dbConfig/dbConfig";
// import { User } from "@/models/user.model"
import { User } from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/utils/getDataFromToken";

connect();

export async function GET(request: NextRequest) {
  try {
    //extract data from token
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    //check if there is no user
    return NextResponse.json({
      message: "User found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
