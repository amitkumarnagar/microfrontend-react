import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import List from "../List";

// Mocked Photo type for testing
type Photo = {
  id: number;
  url: string;
  title: string;
  isFavorite: boolean;
};

describe("List component", () => {
  const photos: Photo[] = [
    {
      id: 1,
      url: "https://example.com/photo1.jpg",
      title: "Photo 1",
      isFavorite: false,
    },
    {
      id: 2,
      url: "https://example.com/photo2.jpg",
      title: "Photo 2",
      isFavorite: true,
    },
  ];

  it("renders photos correctly", () => {
    render(<List photos={photos} />);

    // Ensure both photos are rendered with correct titles and images
    photos.forEach((photo) => {
      expect(screen.getByAltText(photo.title)).toHaveAttribute("src", photo.url);
      expect(screen.getByText(photo.title)).toBeInTheDocument();
    });
  });

  it("calls toggleFavorite when button is clicked", () => {
    const mockToggleFavorite = jest.fn();

    render(<List photos={photos} toggleFavorite={mockToggleFavorite} />);

    const photo1Button = screen.getAllByText("Add to Favorites")[0];
    fireEvent.click(photo1Button);

    expect(mockToggleFavorite).toHaveBeenCalledWith(1);
  });

  it("does not render favorite toggle button if toggleFavorite is not provided", () => {
    render(<List photos={photos} />);

    const buttons = screen.queryAllByRole("button");
    expect(buttons).toHaveLength(0); // No buttons should be rendered
  });
});
