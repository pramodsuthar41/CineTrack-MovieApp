import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function MovieCard({ movie }) {
  const { Title, Year, Poster, Type, Genre, Director, Runtime, imdbRating } =
    movie;

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      {/* Movie Poster */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="300"
          image={
            Poster !== "N/A"
              ? Poster
              : "https://via.placeholder.com/345x300?text=No+Poster"
          }
          alt={Title}
          sx={{
            objectFit: "cover",
          }}
        />

        {/* Favorite Button */}
        <IconButton
          aria-label={`Add ${Title} to favorites`}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "rgba(255,255,255,0.9)",

            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          <FavoriteIcon color="error" />
        </IconButton>
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        {/* Title */}
        <Typography
          variant="h6"
          component="h2"
          fontWeight={600}
          noWrap
          gutterBottom
        >
          {Title}
        </Typography>

        {/* Year + Type */}
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {Year} • {Type}
        </Typography>

        <Divider sx={{ my: 1.5 }} />

        {/* Genre */}
        {Genre && Genre !== "N/A" && (
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
            <Typography variant="body2" fontWeight={600}>
              Genre:
            </Typography>

            <Chip label={Genre} size="small" variant="outlined" />
          </Stack>
        )}

        {/* Director */}
        {Director && Director !== "N/A" && (
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Director:</strong> {Director}
          </Typography>
        )}

        {/* Runtime */}
        {Runtime && Runtime !== "N/A" && (
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Duration:</strong> {Runtime}
          </Typography>
        )}

        {/* IMDb Rating */}
        {imdbRating && imdbRating !== "N/A" && (
          <Stack direction="row" spacing={0.5} alignItems="center">
            <StarIcon
              sx={{
                color: "#f5c518",
                fontSize: 22,
              }}
            />

            <Typography variant="body2" fontWeight={600}>
              {imdbRating}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              IMDb
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}
