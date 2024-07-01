import { NextRequest, NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request: Request | NextRequest) {
  try {
    //   @ts-ignore
    const { searchParams } = new URL(request.url);
    const search_query = searchParams.get("search_query");

    const response = await fetch(
      `https://instagram-scraper-api2.p.rapidapi.com/v1/search_users?search_query=${search_query}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "f61cf01fd3msh5bba119e27db6edp1f89c6jsn5f8974607175",
          "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: `Request failed with status ${response.status}` },
        { status: 400 }
      );
    }

    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
  // Do whatever you want
}
