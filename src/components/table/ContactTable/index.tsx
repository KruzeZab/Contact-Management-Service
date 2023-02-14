import {
  Avatar,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Edit as EditIcon,
  StarBorder as StarBorderIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { useState } from "react";

interface Data {
  id: number;
  image: string;
  name: string;
  email: string;
  phone: number;
  job: string;
}

const users: Data[] = [
  {
    id: 1,
    image: "https://picsum.photos/30",
    name: "Max Well",
    email: "max@gmail.com",
    phone: 1234567894,
    job: "Lawyer",
  },
  {
    id: 2,
    image: "https://picsum.photos/30",
    name: "john Cena",
    email: "john@gmail.com",
    phone: 1234567894,
    job: "Writer",
  },
  {
    id: 3,
    image: "https://picsum.photos/30",
    name: "Paul Cartney",
    email: "pau;@email.com",
    phone: 1234567894,
    job: "Developer",
  },
  {
    id: 4,
    image: "https://picsum.photos/30",
    name: "Paul Cartney",
    email: "pau;@email.com",
    phone: 1234567894,
    job: "Developer",
  },
  {
    id: 5,
    image: "https://picsum.photos/30",
    name: "Paul Cartney",
    email: "pau;@email.com",
    phone: 1234567894,
    job: "Developer",
  },
  {
    id: 6,
    image: "https://picsum.photos/30",
    name: "Paul Cartney",
    email: "pau;@email.com",
    phone: 1234567894,
    job: "Developer",
  },
  {
    id: 7,
    image: "https://picsum.photos/30",
    name: "Paul Cartney",
    email: "pau;@email.com",
    phone: 1234567894,
    job: "Developer",
  },
  {
    id: 8,
    image: "https://picsum.photos/30",
    name: "Paul Cartney",
    email: "pau;@email.com",
    phone: 1234567894,
    job: "Developer",
  },
  {
    id: 9,
    image: "https://picsum.photos/30",
    name: "Paul Cartney",
    email: "pau;@email.com",
    phone: 1234567894,
    job: "Developer",
  },
  {
    id: 10,
    image: "https://picsum.photos/30",
    name: "Paul Cartney",
    email: "pau;@email.com",
    phone: 1234567894,
    job: "Developer",
  },
  {
    id: 11,
    image: "https://picsum.photos/30",
    name: "Paul Cartney",
    email: "pau;@email.com",
    phone: 1234567894,
    job: "Developer",
  },
  {
    id: 12,
    image: "https://picsum.photos/30",
    name: "Paul Cartney",
    email: "pau;@email.com",
    phone: 1234567894,
    job: "Developer",
  },
  {
    id: 13,
    image: "https://picsum.photos/30",
    name: "Paul Cartney",
    email: "pau;@email.com",
    phone: 1234567894,
    job: "Developer",
  },
];

const ContactTable = () => {
  const [hoveredRow, setHoveredRow] = useState<number>(-1);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleEditClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    // Perform edit action for the selected user
  };

  const handleDeleteClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    // Perform delete action for the selected user
  };

  const handleStarClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    // Perform starred action for the selected user
  };

  const handleMouseEnter = (id: number) => {
    setHoveredRow(id);
  };

  const handleMouseLeave = () => {
    setHoveredRow(-1);
  };

  const renderCta = (user: Data) => {
    return (
      <>
        <IconButton
          style={{
            position: "absolute",
            left: "-80px",
            top: "25%",
            transform: `translate("-50%", "-50%")`,
          }}
          onClick={(event) => {
            handleStarClick(event, user.id);
          }}
        >
          <StarBorderIcon />
        </IconButton>
        <IconButton
          style={{
            position: "absolute",
            left: "-40px",
            top: "25%",
            transform: `translate("-50%", "-50%")`,
          }}
          onClick={(event) => {
            handleEditClick(event, user.id);
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          style={{
            position: "absolute",
            left: 0,
            top: "25%",
            transform: `translate("-50%", "-50%")`,
          }}
          onClick={(event) => {
            handleDeleteClick(event, user.id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </>
    );
  };

  return (
    <TableContainer>
      <Table
        size="small"
        stickyHeader
        aria-label="all contacts table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "text.secondary" }}>
              Name
            </TableCell>
            {!isSmallScreen && (
              <>
                <TableCell sx={{ color: "text.secondary" }}>
                  Email
                </TableCell>
                <TableCell sx={{ color: "text.secondary" }}>
                  Phone
                </TableCell>
                <TableCell sx={{ color: "text.secondary" }}>
                  Job, Title & Company
                </TableCell>
              </>
            )}
            <TableCell padding="checkbox"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
            return (
              <TableRow
                hover
                key={user.id}
                onMouseEnter={() => {
                  handleMouseEnter(user.id);
                }}
                onMouseLeave={handleMouseLeave}
              >
                <TableCell sx={{ borderBottom: 0 }}>
                  <Stack direction="row" alignItems="center" gap={4}>
                    <Avatar
                      alt={user.name}
                      src={user.image}
                      sx={{ width: 40, height: 40 }}
                    />
                    {user.name}
                  </Stack>
                </TableCell>
                {!isSmallScreen && (
                  <>
                    <TableCell sx={{ borderBottom: 0 }}>
                      {user.email}
                    </TableCell>
                    <TableCell sx={{ borderBottom: 0 }}>
                      {user.phone}
                    </TableCell>
                    <TableCell sx={{ borderBottom: 0 }}>
                      {user.job}
                    </TableCell>
                  </>
                )}

                <TableCell
                  padding="checkbox"
                  sx={{
                    borderBottom: 0,
                    position: "relative",
                  }}
                >
                  {hoveredRow === user.id && renderCta(user)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactTable;
