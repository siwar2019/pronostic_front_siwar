/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  SelectChangeEvent,
  Stack,
  Table,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  getGroupeEquipe,
  getGroupeEquipeForAdmin,
} from "../../../../_redux/actions/matchs";
import CircleLoading from "../../CircleLoading";
import { styled } from "@mui/material/styles";
import { useStyles } from "./drawPronocticsStyles";

import { RootState } from "../../../../_redux/store/configureStore";
import { useSelector } from "react-redux";
import ModalGroupe from "./modalGroupe";
import CartTeam from "./cartTeam";
import ModalGroupeA1B2 from "./modals/modalGroupeA1B2";
import ModalGroupeB1A2 from "./modals/modalGroupeB1A2";
import ModalGroupeC1D2 from "./modals/modalGroupeC1D2";
import ModalGroupeD1C2 from "./modals/modalGroupeD1C2";
import ModalGroupeE1F2 from "./modals/modalGroupeE1F2";
import ModalGroupeF1E2 from "./modals/modalGroupeF1E2";
import ModalGroupeG1H2 from "./modals/modalGroupeG1H2";
import ModalGroupeH1G2 from "./modals/modalGroupeH1G2";
import ModalGroupeA1B2C1D2 from "./modals/modalGroupeA1B2C1D2";
import ModalGroupeB1A2D1C2 from "./modals/modalGroupeB1A2D1C2";
import ModalGroupeE1F2G1H2 from "./modals/modalGroupeE1F2G1H2";
import ModalGroupeF1E2H1G2 from "./modals/modalGroupeF1E2H1G2";
import ModalGroupeA1B2C1D2E1F2G1H2 from "./modals/modalGroupeA1B2C1D2E1F2G1H2";
import ModalGroupeB1A2D1C2F1E2H1G2 from "./modals/modalGroupeB1A2D1C2F1E2H1G2";
import CartTeamB1A2 from "./cartTeams/cartTeamB1A2";
import CartTeamD1C2 from "./cartTeams/cartTeamD1C2";

import CartTeamA1B2 from "./cartTeams/cartTeamA1B2";
import CartTeamC1D2 from "./cartTeams/cartTeamC1D2";

import CartTeamA1B2C1D2 from "./cartTeams/cartTeamA1B2C1D2";

import CartTeamB1A2D1C2 from "./cartTeams/cartTeamB1A2D1C2";

import CartTeamChampion from "./cartTeams/cartTeamChampion";
import {
  createDrawByAdminRoundFive,
  createDrawByAdminRoundFour16Teams,
  createDrawByAdminRoundOne16Teams,
  createDrawByAdminRoundThree16Teams,
  createDrawByAdminRoundTwo16Teams,
  createDrawByEmployee16Teams,
  createDrawSetting16Teams,
  getCorrectDraw,
  getDraw16TeamsSettingByAdmin,
  getDraw16TeamsSettingByEmployee,
  getDrawByAdmin,
  getDrawByEmployee,
  updateDraw,
  updateDrawSetting16Teams,
} from "../../../../_redux/actions/draw";
import backgroundDraw from "../../../assets/draw.jpg";
import { useTranslation } from "react-i18next";
import ModalGroupeChampion16 from "./modals/modalGroupeChampion16";
import { useForm, SubmitHandler } from "react-hook-form";

const roundOne = ["A1", "B2", "C1", "D2", "E1", "F2", "G1", "H2"];
const roundTwo = ["A2", "B1", "C2", "D1", "E2", "F1", "G2", "H1"];
const roundThree = ["A1B2", "C1D2", "E1F2", "G1H2"];
const roundFour = ["B1A2", "D1C2", "F1E2", "H1G2"];
const roundFive = ["A1B2C1D2", "E1F2G1H2"];
const roundSix = ["B1A2D1C2", "F1E2H1G2"];

const roundNine = ["champion"];

interface ISettingsFormValues {
  correctPhase1: string;
  incorrectPhase1: string;
  correctPhase2: string;
  incorrectPhase2: string;
  correctPhase3: string;
  incorrectPhase3: string;
  correctChampion: string;
  event_id: string;
}

export default function DrawPronoctics16() {
  const user = useAppSelector(({ auth: { currentUser } }) => currentUser);
  const { id } = useParams();

  const GroupesEquipe = useAppSelector(
    ({ matchsSlice: { groupeEquipe } }) => groupeEquipe
  );

  const drawSetting16Team = useAppSelector(
    ({ drawSlice: { drawSetting16Team } }) => drawSetting16Team
  );

  const drawSetting16TeamEmployee = useAppSelector(
    ({ drawSlice: { drawSetting16TeamEmployee } }) => drawSetting16TeamEmployee
  );

  const employeeDraw = useAppSelector(
    ({ drawSlice: { employeeDraw } }) => employeeDraw
  );

  const eventById = useAppSelector(
    ({ eventsSlice: { eventById } }) => eventById
  );

  const correctDraw = useAppSelector(
    ({ drawSlice: { correctDraw } }) => correctDraw
  );

  let groupesEq = useSelector(
    (state: RootState) => state.groupesSlice.groupesEquipes
  );
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  let params = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);
  const [openModal6, setOpenModal6] = useState(false);
  const [openModal7, setOpenModal7] = useState(false);
  const [openModal8, setOpenModal8] = useState(false);
  const [openModal9, setOpenModal9] = useState(false);
  const [openModal10, setOpenModal10] = useState(false);
  const [openModal11, setOpenModal11] = useState(false);
  const [openModal12, setOpenModal12] = useState(false);
  const [openModal13, setOpenModal13] = useState(false);
  const [openModal14, setOpenModal14] = useState(false);
  const [openModal15, setOpenModal15] = useState(false);
  const [openModal16, setOpenModal16] = useState(false);

  const [groupIndex, setGroupIndex] = useState();
  const [roundData, setRoundData] = useState();
  const handleCloseModal = () => setOpenModal(false);
  const handleCloseModal2 = () => setOpenModal2(false);
  const handleCloseModal3 = () => setOpenModal3(false);
  const handleCloseModal4 = () => setOpenModal4(false);
  const handleCloseModal5 = () => setOpenModal5(false);
  const handleCloseModal6 = () => setOpenModal6(false);
  const handleCloseModal7 = () => setOpenModal7(false);
  const handleCloseModal8 = () => setOpenModal8(false);
  const handleCloseModal9 = () => setOpenModal9(false);
  const handleCloseModal10 = () => setOpenModal10(false);
  const handleCloseModal11 = () => setOpenModal11(false);
  const handleCloseModal12 = () => setOpenModal12(false);
  const handleCloseModal13 = () => setOpenModal13(false);
  const handleCloseModal14 = () => setOpenModal14(false);
  const handleCloseModal15 = () => setOpenModal15(false);
  const handleCloseModal16 = () => setOpenModal16(false);

  const handleOpenModal = (index, roundData) => {
    setRoundData(roundData);
    setGroupIndex(index);
    setOpenModal(true);
  };

  const handleOpenModal2 = (index, roundData) => {
    setRoundData(roundData);
    setGroupIndex(index);
    setOpenModal2(true);
  };
  const handleOpenModal3 = (index, roundData) => {
    setRoundData(roundData);
    setGroupIndex(index);
    setOpenModal3(true);
  };
  const handleOpenModal4 = (index, roundData) => {
    setRoundData(roundData);
    setGroupIndex(index);
    setOpenModal4(true);
  };
  const handleOpenModal5 = (index, roundData) => {
    setRoundData(roundData);
    setGroupIndex(index);
    setOpenModal5(true);
  };
  const handleOpenModal6 = (index, roundData) => {
    setRoundData(roundData);
    setGroupIndex(index);
    setOpenModal6(true);
  };
  const handleOpenModal7 = (index, roundData) => {
    setRoundData(roundData);
    setGroupIndex(index);
    setOpenModal7(true);
  };
  const handleOpenModal8 = (index, roundData) => {
    setRoundData(roundData);
    setGroupIndex(index);
    setOpenModal8(true);
  };
  const handleOpenModal9 = (index, roundData) => {
    setRoundData(roundData);
    setGroupIndex(index);
    setOpenModal9(true);
  };
  const handleOpenModal10 = (index, roundData) => {
    setRoundData(roundData);
    setGroupIndex(index);
    setOpenModal10(true);
  };
  const handleOpenModal11 = (index, roundData) => {
    setRoundData(roundData);
    setGroupIndex(index);
    setOpenModal11(true);
  };
  const handleOpenModal12 = (index, roundData) => {
    setRoundData(roundData);
    setGroupIndex(index);
    setOpenModal12(true);
  };
  const handleOpenModal13 = (index, roundData) => {
    setRoundData(roundData);
    setGroupIndex(index);
    setOpenModal13(true);
  };
  const handleOpenModal14 = (index, roundData) => {
    setRoundData(roundData);
    setGroupIndex(index);
    setOpenModal14(true);
  };
  const handleOpenModal15 = (index, roundData) => {
    setRoundData(roundData);
    setGroupIndex(index);
    setOpenModal15(true);
  };
  const handleOpenModal16 = (index, roundData) => {
    setRoundData(roundData);
    setGroupIndex(index);
    setOpenModal16(true);
  };

  // if (employeeDraw) {
  //   dispatch(updateDraw(employeeDraw));
  // }

  useEffect(() => {
    if (user.role === "employee") {
      dispatch(getGroupeEquipe(params.id as string));
      dispatch(getDrawByEmployee(params.id as string));
      dispatch(getDraw16TeamsSettingByEmployee(params.id as string));
    }
    if (user.role === "admin") {
      dispatch(getGroupeEquipeForAdmin(params.id as string));
      dispatch(getDrawByAdmin(params.id as string));
      dispatch(getDraw16TeamsSettingByAdmin(params.id as string));
    }
    dispatch(getCorrectDraw(params.id as string));

    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [dispatch, params.id, user.role]);

  useEffect(() => {
    dispatch(updateDraw(employeeDraw));
  }, [dispatch, employeeDraw]);

  const createDraw = () => {
    dispatch(
      createDrawByEmployee16Teams({ draw, event_id: params.id as string })
    );
    setTimeout(() => {
      dispatch(getDrawByEmployee(params.id as string));
    }, 300);
  };

  const createDrawAdminOne = () => {
    dispatch(
      createDrawByAdminRoundOne16Teams({ draw, event_id: params.id as string })
    );
    setTimeout(() => {
      dispatch(getDrawByAdmin(params.id as string));
      dispatch(getCorrectDraw(params.id as string));
    }, 300);
  };

  const createDrawAdminTwo = () => {
    dispatch(
      createDrawByAdminRoundTwo16Teams({ draw, event_id: params.id as string })
    );
    setTimeout(() => {
      dispatch(getDrawByAdmin(params.id as string));
      dispatch(getCorrectDraw(params.id as string));
    }, 300);
  };

  const createDrawAdminThree = () => {
    dispatch(
      createDrawByAdminRoundThree16Teams({
        draw,
        event_id: params.id as string,
      })
    );
    setTimeout(() => {
      dispatch(getDrawByAdmin(params.id as string));
      dispatch(getCorrectDraw(params.id as string));
    }, 300);
  };

  const createDrawAdminFour = () => {
    dispatch(
      createDrawByAdminRoundFour16Teams({ draw, event_id: params.id as string })
    );
    setTimeout(() => {
      dispatch(getDrawByAdmin(params.id as string));
      dispatch(getCorrectDraw(params.id as string));
    }, 300);
  };

  const createDrawAdminFive = () => {
    dispatch(
      createDrawByAdminRoundFive({ draw, event_id: params.id as string })
    );
    setTimeout(() => {
      dispatch(getDrawByAdmin(params.id as string));
      dispatch(getCorrectDraw(params.id as string));
    }, 300);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    borderBottom: 0,

    [`&.${tableCellClasses.head}`]: {
      background: "#2192ff",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {},
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0px 15px 20px rgba(0,0,0,0.1)",
    transition: "all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55)",
  };
  const draw = useAppSelector(({ drawSlice: { draw } }) => draw);

  const [value, setValue] = React.useState({
    id: "",
    name: "",
    country: "",
    icon: "",
    createdAt: "",
    updatedAt: "",
  });

  const formMethods = useForm<ISettingsFormValues>();
  const { register, handleSubmit } = formMethods;
  const _onSubmit: SubmitHandler<ISettingsFormValues> = (data) => {
    if (!drawSetting16Team.event_id) {
      dispatch(createDrawSetting16Teams({ ...data, event_id: id as string }));
      setTimeout(() => {
        dispatch(getDraw16TeamsSettingByAdmin(params.id as string));
      }, 1000);
    } else {
      dispatch(updateDrawSetting16Teams({ ...data, event_id: id as string }));
      setTimeout(() => {
        dispatch(getDraw16TeamsSettingByAdmin(params.id as string));
      }, 1000);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(value);
    dispatch(value.id as any);
  };

  const handleChange2 = (event: SelectChangeEvent) => {
    const data = groupesEq.find((value) => value.id === event.target.value);
    if (data) {
      setValue(data as any);
      dispatch(getGroupeEquipe(data.id as any));
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    [
      dispatch,
      // eslint-disable-next-line array-callback-return
      data.order.map((eq, index) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        eq.equipes.id;
      }),
    ];
  };

  return (
    <Box
      style={{
        backgroundImage: `url(${backgroundDraw})`,
        backgroundRepeat: "no-repeat !important",
        backgroundSize: "cover",
        backgroundPosition: "center !important",
      }}
    >
      <Container
        style={{
          paddingBottom: "100px",
          // minWidth: "1250px",
        }}
      >
        {loading ? (
          <CircleLoading loading={loading} />
        ) : (
          <>
            <TableContainer component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    {GroupesEquipe &&
                      GroupesEquipe.map((el, index) => (
                        <StyledTableCell
                          style={{
                            textAlign: "center",
                          }}
                          key={index}
                        >
                          <p className={classes.nameGroupes}>{el.name}</p>
                        </StyledTableCell>
                      ))}
                  </TableRow>
                </TableHead>

                <TableRow>
                  {GroupesEquipe &&
                    GroupesEquipe.map((el, index) => (
                      <StyledTableCell
                        style={{
                          background: "#fcfcfc",
                          border: "solid 1px #d6d6d6",
                        }}
                        key={index}
                      >
                        {el &&
                          el.order.map((row, index) => (
                            <Grid key={index}>
                              {" "}
                              <StyledTableCell
                                component="th"
                                scope="row"
                                style={{
                                  background: "#fcfcfc",
                                  width: "10%",
                                  textAlign: "center",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <img
                                    // src={`https://flagcdn.com/w20/${row.equipes.icon.toLowerCase()}.png`}
                                    src={
                                      (process.env.REACT_APP_UPLOADS_LOGO +
                                        row.equipes.images) as any
                                    }
                                    width="20"
                                    height="13"
                                    alt="Country flag"
                                    className={classes.flagImgGroupe}
                                  ></img>
                                  <p className={classes.teamGroupe}>
                                    {row.equipes.name}
                                  </p>
                                </div>
                              </StyledTableCell>
                            </Grid>
                          ))}
                      </StyledTableCell>
                    ))}{" "}
                </TableRow>
              </Table>
            </TableContainer>
            <Typography align="center" variant="h2" marginTop={4}>
              {" "}
              {t("employee.Qualification.winningTeamFor")}
            </Typography>
            <Typography align="center" variant="h3" marginBottom={4}>
              {" "}
              {eventById && eventById.name}
            </Typography>
            {user.role === "admin" && (
              <Paper elevation={12} className={classes.paperSetting}>
                <div
                  style={{
                    background:
                      "-webkit-linear-gradient(left, #2192ff, #030e19)",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                >
                  <Typography
                    align="center"
                    variant="h4"
                    marginBottom={4}
                    style={{ color: "white", fontSize: "24px" }}
                  >
                    Setting Points of draw
                  </Typography>
                </div>
                <form onSubmit={handleSubmit(_onSubmit)}>
                  <Stack
                    direction="column"
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography align="center" variant="h6" sx={{ mt: 2 }}>
                      {t("employee.Qualification.quarterFinals")}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={8}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Stack>
                        Correct Position
                        <TextField
                          sx={{
                            "& fieldset": { border: "none" },
                          }}
                          defaultValue={drawSetting16Team?.correctPhase1}
                          InputProps={{
                            inputProps: {
                              disableUnderline: false,
                              min: 0,
                              style: {
                                textAlign: "center",
                                backgroundColor: "#55c27e",
                                fontSize: "20px",
                                width: "70px",
                                borderRadius: "15px",
                              },
                            },
                          }}
                          type="number"
                          required
                          {...register("correctPhase1")}
                        />
                      </Stack>
                      <Stack>
                        Incorrect Position
                        <TextField
                          sx={{
                            "& fieldset": { border: "none" },
                          }}
                          defaultValue={drawSetting16Team?.incorrectPhase1}
                          InputProps={{
                            inputProps: {
                              disableUnderline: false,
                              min: 0,
                              style: {
                                textAlign: "center",
                                backgroundColor: "#ffce72",
                                fontSize: "20px",
                                width: "70px",
                                borderRadius: "15px",
                              },
                            },
                          }}
                          type="number"
                          required
                          {...register("incorrectPhase1")}
                        />
                      </Stack>
                    </Stack>
                    <Typography align="center" variant="h6">
                      {t("employee.Qualification.semiFinals")}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={8}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Stack>
                        Correct Position
                        <TextField
                          sx={{
                            "& fieldset": { border: "none" },
                          }}
                          defaultValue={drawSetting16Team?.correctPhase2}
                          InputProps={{
                            inputProps: {
                              disableUnderline: false,
                              min: 0,
                              style: {
                                textAlign: "center",
                                backgroundColor: "#55c27e",
                                fontSize: "20px",
                                width: "70px",
                                borderRadius: "15px",
                              },
                            },
                          }}
                          type="number"
                          required
                          {...register("correctPhase2")}
                        />
                      </Stack>
                      <Stack>
                        Incorrect Position
                        <TextField
                          sx={{
                            "& fieldset": { border: "none" },
                          }}
                          defaultValue={drawSetting16Team?.incorrectPhase2}
                          InputProps={{
                            inputProps: {
                              disableUnderline: false,
                              min: 0,
                              style: {
                                textAlign: "center",
                                backgroundColor: "#ffce72",
                                fontSize: "20px",
                                width: "70px",
                                borderRadius: "15px",
                              },
                            },
                          }}
                          type="number"
                          required
                          {...register("incorrectPhase2")}
                        />
                      </Stack>
                    </Stack>
                    <Typography align="center" variant="h6">
                      {t("employee.Qualification.final")}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={8}
                      sx={{ mt: 4 }}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Stack>
                        Correct Position
                        <TextField
                          sx={{
                            "& fieldset": { border: "none" },
                          }}
                          defaultValue={drawSetting16Team?.correctPhase3}
                          InputProps={{
                            inputProps: {
                              disableUnderline: false,
                              min: 0,
                              style: {
                                textAlign: "center",
                                backgroundColor: "#55c27e",
                                fontSize: "20px",
                                width: "70px",
                                borderRadius: "15px",
                              },
                            },
                          }}
                          type="number"
                          required
                          {...register("correctPhase3")}
                        />
                      </Stack>
                      <Stack>
                        Incorrect Position
                        <TextField
                          sx={{
                            "& fieldset": { border: "none" },
                          }}
                          defaultValue={drawSetting16Team?.incorrectPhase3}
                          InputProps={{
                            inputProps: {
                              disableUnderline: false,
                              min: 0,
                              style: {
                                textAlign: "center",
                                backgroundColor: "#ffce72",
                                fontSize: "20px",
                                width: "70px",
                                borderRadius: "15px",
                              },
                            },
                          }}
                          type="number"
                          required
                          {...register("incorrectPhase3")}
                        />
                      </Stack>
                    </Stack>
                    <Typography align="center" variant="h6">
                      {t("employee.Qualification.champion")}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ mt: 4 }}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Stack>
                        Correct Position
                        <TextField
                          sx={{
                            "& fieldset": { border: "none" },
                          }}
                          defaultValue={drawSetting16Team?.correctChampion}
                          InputProps={{
                            inputProps: {
                              disableUnderline: false,
                              min: 0,
                              style: {
                                textAlign: "center",
                                backgroundColor: "#55c27e",
                                fontSize: "20px",
                                width: "70px",
                                borderRadius: "15px",
                              },
                            },
                          }}
                          type="number"
                          required
                          {...register("correctChampion")}
                        />
                      </Stack>
                    </Stack>
                    <Button
                      type="submit"
                      style={{
                        background:
                          "-webkit-linear-gradient(left, #2192ff, #135799)",
                        color: "white",
                        textTransform: "capitalize",
                        width: "80px",
                        height: "40px",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "20px",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      {t("employee.Pronostics.update")}
                    </Button>
                  </Stack>
                </form>
              </Paper>
            )}
            {user.role === "admin" && (
              <>
                {!employeeDraw && !employeeDraw.A1 && (
                  <ModalGroupe
                    openModal={openModal}
                    handleCloseModal={handleCloseModal}
                    groupIndex={groupIndex}
                    roundData={roundData}
                  />
                )}
                {employeeDraw && employeeDraw.A1 && (
                  <>
                    <ModalGroupeA1B2
                      openModal={openModal2}
                      handleCloseModal={handleCloseModal2}
                      groupIndex={groupIndex}
                      roundData={roundData}
                    />
                    <ModalGroupeB1A2
                      openModal={openModal3}
                      handleCloseModal={handleCloseModal3}
                      groupIndex={groupIndex}
                      roundData={roundData}
                    />
                    <ModalGroupeC1D2
                      openModal={openModal4}
                      handleCloseModal={handleCloseModal4}
                      groupIndex={groupIndex}
                      roundData={roundData}
                    />
                    <ModalGroupeD1C2
                      openModal={openModal5}
                      handleCloseModal={handleCloseModal5}
                      groupIndex={groupIndex}
                      roundData={roundData}
                    />
                  </>
                )}
                {employeeDraw && employeeDraw.A1B2 && (
                  <>
                    <ModalGroupeA1B2C1D2
                      openModal={openModal10}
                      handleCloseModal={handleCloseModal10}
                      groupIndex={groupIndex}
                      roundData={roundData}
                    />
                    <ModalGroupeB1A2D1C2
                      openModal={openModal11}
                      handleCloseModal={handleCloseModal11}
                      groupIndex={groupIndex}
                      roundData={roundData}
                    />
                    <ModalGroupeE1F2G1H2
                      openModal={openModal12}
                      handleCloseModal={handleCloseModal12}
                      groupIndex={groupIndex}
                      roundData={roundData}
                    />
                    <ModalGroupeF1E2H1G2
                      openModal={openModal13}
                      handleCloseModal={handleCloseModal13}
                      groupIndex={groupIndex}
                      roundData={roundData}
                    />
                  </>
                )}

                {employeeDraw && employeeDraw.A1B2C1D2 && (
                  <>
                    <ModalGroupeA1B2C1D2E1F2G1H2
                      openModal={openModal14}
                      handleCloseModal={handleCloseModal14}
                      groupIndex={groupIndex}
                      roundData={roundData}
                    />
                    <ModalGroupeB1A2D1C2F1E2H1G2
                      openModal={openModal15}
                      handleCloseModal={handleCloseModal15}
                      groupIndex={groupIndex}
                      roundData={roundData}
                    />
                  </>
                )}
                {employeeDraw && employeeDraw.A1B2C1D2 && (
                  <ModalGroupeChampion16
                    openModal={openModal16}
                    handleCloseModal={handleCloseModal16}
                    groupIndex={groupIndex}
                    roundData={roundData}
                  />
                )}
              </>
            )}
            {user.role === "employee" && !employeeDraw && (
              <>
                <ModalGroupe
                  openModal={openModal}
                  handleCloseModal={handleCloseModal}
                  groupIndex={groupIndex}
                  roundData={roundData}
                />
                <ModalGroupeA1B2
                  openModal={openModal2}
                  handleCloseModal={handleCloseModal2}
                  groupIndex={groupIndex}
                  roundData={roundData}
                />
                <ModalGroupeB1A2
                  openModal={openModal3}
                  handleCloseModal={handleCloseModal3}
                  groupIndex={groupIndex}
                  roundData={roundData}
                />
                <ModalGroupeC1D2
                  openModal={openModal4}
                  handleCloseModal={handleCloseModal4}
                  groupIndex={groupIndex}
                  roundData={roundData}
                />
                <ModalGroupeD1C2
                  openModal={openModal5}
                  handleCloseModal={handleCloseModal5}
                  groupIndex={groupIndex}
                  roundData={roundData}
                />
                <ModalGroupeE1F2
                  openModal={openModal6}
                  handleCloseModal={handleCloseModal6}
                  groupIndex={groupIndex}
                  roundData={roundData}
                />
                <ModalGroupeF1E2
                  openModal={openModal7}
                  handleCloseModal={handleCloseModal7}
                  groupIndex={groupIndex}
                  roundData={roundData}
                />
                <ModalGroupeG1H2
                  openModal={openModal8}
                  handleCloseModal={handleCloseModal8}
                  groupIndex={groupIndex}
                  roundData={roundData}
                />
                <ModalGroupeH1G2
                  openModal={openModal9}
                  handleCloseModal={handleCloseModal9}
                  groupIndex={groupIndex}
                  roundData={roundData}
                />

                <ModalGroupeA1B2C1D2
                  openModal={openModal10}
                  handleCloseModal={handleCloseModal10}
                  groupIndex={groupIndex}
                  roundData={roundData}
                />
                <ModalGroupeB1A2D1C2
                  openModal={openModal11}
                  handleCloseModal={handleCloseModal11}
                  groupIndex={groupIndex}
                  roundData={roundData}
                />
                <ModalGroupeE1F2G1H2
                  openModal={openModal12}
                  handleCloseModal={handleCloseModal12}
                  groupIndex={groupIndex}
                  roundData={roundData}
                />
                <ModalGroupeF1E2H1G2
                  openModal={openModal13}
                  handleCloseModal={handleCloseModal13}
                  groupIndex={groupIndex}
                  roundData={roundData}
                />
                <ModalGroupeA1B2C1D2E1F2G1H2
                  openModal={openModal14}
                  handleCloseModal={handleCloseModal14}
                  groupIndex={groupIndex}
                  roundData={roundData}
                />
                <ModalGroupeB1A2D1C2F1E2H1G2
                  openModal={openModal15}
                  handleCloseModal={handleCloseModal15}
                  groupIndex={groupIndex}
                  roundData={roundData}
                />

                <ModalGroupeChampion16
                  openModal={openModal16}
                  handleCloseModal={handleCloseModal16}
                  groupIndex={groupIndex}
                  roundData={roundData}
                />
              </>
            )}

            <>
              <Typography align="center" variant="h5">
                <hr></hr>
                {t("employee.Qualification.quarterFinals")}
              </Typography>
              {user.role === "employee" && (
                <div
                  style={{
                    padding: "2rem 2rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      verticalAlign: "middle",
                      fontWeight: "bold",
                      color: "#00a83f",
                      display: "inline-block",
                      marginRight: "20px",
                      fontSize: "16px",
                      textShadow: "1px 1px #000000",
                    }}
                  >
                    Correct : {drawSetting16TeamEmployee.correctPhase1} points
                  </div>
                  <div
                    style={{
                      verticalAlign: "middle",
                      fontWeight: "bold",
                      color: "#f3a000",
                      display: "inline-block",
                      marginRight: "20px",
                      fontSize: "16px",
                      textShadow: "1px 1px #000000",
                    }}
                  >
                    Position incorrect :{" "}
                    {drawSetting16TeamEmployee.incorrectPhase1} points
                  </div>
                  <div
                    style={{
                      verticalAlign: "middle",
                      fontWeight: "bold",
                      color: "#d6033f",
                      display: "inline-block",
                      fontSize: "16px",
                      textShadow: "1px 1px #000000",
                    }}
                  >
                    Incorrect : 0 point
                  </div>
                </div>
              )}
              <Grid
                container
                rowSpacing={4}
                columnSpacing={{ xs: 1, sm: 8, md: 8 }}
                sx={{ mt: 1 }}
              >
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "grid",
                    gap: 1,
                    gridTemplateColumns: "repeat(2, 1fr)",
                  }}
                >
                  {Array.apply(null, Array(4)).map((element, index) => (
                    <CartTeam
                      handleOpenModal={() => handleOpenModal(index, roundOne)}
                      groupIndex={index}
                      roundData={roundOne}
                      roundDataTwo={roundTwo}
                      name={roundOne[index]}
                    />
                  ))}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "grid",
                    gap: 1,
                    gridTemplateColumns: "repeat(2, 1fr)",
                  }}
                >
                  {Array.apply(null, Array(4)).map((element, index) => (
                    <CartTeam
                      handleOpenModal={() => handleOpenModal(index, roundTwo)}
                      groupIndex={index}
                      roundData={roundTwo}
                      roundDataTwo={roundOne}
                      name={roundTwo[index]}
                      sx={{
                        mt: 5,
                      }}
                    />
                  ))}
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {user?.role === "admin" &&
                  !employeeDraw.A1 &&
                  drawSetting16Team.correctPhase1 && (
                    <Button
                      style={{
                        background:
                          "-webkit-linear-gradient(left, #2192ff, #135799)",
                        color: "white",
                        textTransform: "capitalize",
                        width: "80px",
                        height: "40px",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "20px",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                      type="button"
                      onClick={createDrawAdminOne}
                    >
                      {t("employee.Qualification.send")}
                    </Button>
                  )}
              </Grid>
              <Typography align="center" variant="h5" marginTop={4}>
                <hr></hr>
                {t("employee.Qualification.semiFinals")}
              </Typography>
              {user.role === "employee" && (
                <div
                  style={{
                    padding: "2rem 2rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      verticalAlign: "middle",
                      fontWeight: "bold",
                      color: "#00a83f",
                      display: "inline-block",
                      marginRight: "20px",
                      fontSize: "16px",
                      textShadow: "1px 1px #000000",
                    }}
                  >
                    Correct : {drawSetting16TeamEmployee.correctPhase2} points
                  </div>
                  <div
                    style={{
                      verticalAlign: "middle",
                      fontWeight: "bold",
                      color: "#f3a000",
                      display: "inline-block",
                      marginRight: "20px",
                      fontSize: "16px",
                      textShadow: "1px 1px #000000",
                    }}
                  >
                    Position incorrect :{" "}
                    {drawSetting16TeamEmployee.incorrectPhase2} points
                  </div>
                  <div
                    style={{
                      verticalAlign: "middle",
                      fontWeight: "bold",
                      color: "#d6033f",
                      display: "inline-block",
                      fontSize: "16px",
                      textShadow: "1px 1px #000000",
                    }}
                  >
                    Incorrect : 0 point
                  </div>
                </div>
              )}
              <Grid
                container
                rowSpacing={4}
                columnSpacing={{ xs: 1, sm: 8, md: 8 }}
                sx={{ mt: 2 }}
              >
                <Grid item xs={6}>
                  <Typography align="center" variant="h6">
                    {t("employee.Qualification.semiFinal1")}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="center" variant="h6">
                    {t("employee.Qualification.semiFinal2")}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                container
                rowSpacing={4}
                columnSpacing={{ xs: 1, sm: 8, md: 8 }}
                sx={{ mt: 0.1 }}
              >
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "grid",
                    gap: 0,
                    gridTemplateColumns: "repeat(2, 1fr)",
                  }}
                >
                  <CartTeamA1B2
                    handleOpenModal={() => handleOpenModal2(0, roundThree)}
                    groupIndex={0}
                    roundData={roundThree}
                    roundDataTwo={roundFour}
                    name={roundThree[0]}
                  />
                  <CartTeamC1D2
                    handleOpenModal={() => handleOpenModal4(1, roundThree)}
                    groupIndex={1}
                    roundData={roundThree}
                    roundDataTwo={roundFour}
                    name={roundThree[1]}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "grid",
                    gap: 0,
                    gridTemplateColumns: "repeat(2, 1fr)",
                  }}
                >
                  <CartTeamB1A2
                    handleOpenModal={() => handleOpenModal3(0, roundFour)}
                    groupIndex={0}
                    roundData={roundFour}
                    roundDataTwo={roundThree}
                    name={roundFour[0]}
                  />
                  <CartTeamD1C2
                    handleOpenModal={() => handleOpenModal5(1, roundFour)}
                    groupIndex={1}
                    roundData={roundFour}
                    roundDataTwo={roundThree}
                    name={roundFour[1]}
                  />
                </Grid>
              </Grid>

              <Grid
                container
                rowSpacing={4}
                columnSpacing={{ xs: 1, sm: 8, md: 8 }}
                sx={{ mt: 0.1 }}
              ></Grid>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {user?.role === "admin" &&
                  employeeDraw.A1 &&
                  !employeeDraw.A1B2 && (
                    <Button
                      style={{
                        background:
                          "-webkit-linear-gradient(left, #2192ff, #135799)",
                        color: "white",
                        textTransform: "capitalize",
                        width: "80px",
                        height: "40px",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "20px",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                      type="button"
                      onClick={createDrawAdminTwo}
                    >
                      {t("employee.Qualification.send")}
                    </Button>
                  )}
              </Grid>
              <Typography align="center" variant="h5" marginTop={4}>
                <hr></hr>
                {t("employee.Qualification.final")}
              </Typography>
              {user.role === "employee" && (
                <div
                  style={{
                    padding: "2rem 2rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      verticalAlign: "middle",
                      fontWeight: "bold",
                      color: "#00a83f",
                      display: "inline-block",
                      marginRight: "20px",
                      fontSize: "16px",
                      textShadow: "1px 1px #000000",
                    }}
                  >
                    Correct : {drawSetting16TeamEmployee.correctPhase3} points
                  </div>
                  <div
                    style={{
                      verticalAlign: "middle",
                      fontWeight: "bold",
                      color: "#f3a000",
                      display: "inline-block",
                      marginRight: "20px",
                      fontSize: "16px",
                      textShadow: "1px 1px #000000",
                    }}
                  >
                    Position incorrect :{" "}
                    {drawSetting16TeamEmployee.incorrectPhase3} points
                  </div>
                  <div
                    style={{
                      verticalAlign: "middle",
                      fontWeight: "bold",
                      color: "#d6033f",
                      display: "inline-block",
                      fontSize: "16px",
                      textShadow: "1px 1px #000000",
                    }}
                  >
                    Incorrect : 0 point
                  </div>
                </div>
              )}
              <Grid
                container
                rowSpacing={4}
                columnSpacing={{ xs: 1, sm: 8, md: 8 }}
                sx={{ mt: 1 }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "grid",
                    gap: 1,
                    gridTemplateColumns: "repeat(2, 1fr)",
                  }}
                >
                  <CartTeamA1B2C1D2
                    handleOpenModal={handleOpenModal10}
                    groupIndex={0}
                    roundData={roundFive}
                    roundDataTwo={roundSix}
                    name={roundFive[0]}
                  />
                  <CartTeamB1A2D1C2
                    handleOpenModal={handleOpenModal11}
                    groupIndex={0}
                    roundData={roundSix}
                    roundDataTwo={roundFive}
                    name={roundSix[0]}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {user?.role === "admin" &&
                  employeeDraw.A1B2 &&
                  !employeeDraw.A1B2C1D2 && (
                    <Button
                      style={{
                        background:
                          "-webkit-linear-gradient(left, #2192ff, #135799)",
                        color: "white",
                        textTransform: "capitalize",
                        width: "80px",
                        height: "40px",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "20px",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                      type="button"
                      onClick={createDrawAdminThree}
                    >
                      {t("employee.Qualification.send")}
                    </Button>
                  )}
              </Grid>

              <Typography
                align="center"
                variant="h5"
                marginTop={6}
                marginBottom={2}
              >
                <hr></hr>
                {t("employee.Qualification.champion")}
              </Typography>
              {user.role === "employee" && (
                <div
                  style={{
                    padding: "2rem 2rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      verticalAlign: "middle",
                      fontWeight: "bold",
                      color: "#00a83f",
                      display: "inline-block",
                      marginRight: "20px",
                      fontSize: "16px",
                      textShadow: "1px 1px #000000",
                    }}
                  >
                    Correct : {drawSetting16TeamEmployee.correctChampion} points
                  </div>
                  <div
                    style={{
                      verticalAlign: "middle",
                      fontWeight: "bold",
                      color: "#d6033f",
                      display: "inline-block",
                      fontSize: "16px",
                      textShadow: "1px 1px #000000",
                    }}
                  >
                    Incorrect : 0 point
                  </div>
                </div>
              )}
              <Grid
                item
                xs={12}
                sx={{
                  display: "grid",
                  gap: 1,
                  mb: 4,
                }}
              >
                <CartTeamChampion
                  handleOpenModal={() => handleOpenModal16(0, roundNine)}
                  groupIndex={0}
                  roundData={roundNine}
                  name={roundNine[0]}
                />
              </Grid>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {user?.role === "admin" &&
                  employeeDraw.A1B2C1D2 &&
                  !employeeDraw.champion && (
                    <Button
                      style={{
                        background:
                          "-webkit-linear-gradient(left, #2192ff, #135799)",
                        color: "white",
                        textTransform: "capitalize",
                        width: "80px",
                        height: "40px",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "20px",
                        marginBottom: "30px",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                      type="button"
                      onClick={createDrawAdminFour}
                    >
                      {t("employee.Qualification.send")}
                    </Button>
                  )}
              </Grid>
              <hr></hr>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {user?.role === "employee" && !employeeDraw && (
                  <Button
                    style={{
                      background:
                        "-webkit-linear-gradient(left, #2192ff, #135799)",
                      color: "white",
                      textTransform: "capitalize",
                      width: "100px",
                      height: "50px",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "100px",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                    type="button"
                    onClick={createDraw}
                  >
                    {t("employee.Qualification.send")}
                  </Button>
                )}
              </Grid>
            </>
          </>
        )}
      </Container>
    </Box>
  );
}

// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Checkbox,
//   Container,
//   Divider,
//   FormControl,
//   FormControlLabel,
//   FormGroup,
//   FormLabel,
//   Grid,
//   Modal,
//   Paper,
//   Radio,
//   RadioGroup,
//   SelectChangeEvent,
//   Stack,
//   Table,
//   TableBody,
//   TableCell,
//   tableCellClasses,
//   TableContainer,
//   TableHead,
//   TableRow,
//   ToggleButton,
//   ToggleButtonGroup,
//   Typography,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
// import {
//   getGroupeEquipe,
//   getGroupeEquipeForAdmin,
// } from "../../../../_redux/actions/matchs";
// import CircleLoading from "../../CircleLoading";
// import { styled } from "@mui/material/styles";
// import { useStyles } from "./drawPronocticsStyles";
// import countryImg from "../../../assets/countryImg.png";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   IEquipe,
//   IGroupe,
//   IGroupesEquipe,
//   IMatchs,
// } from "../../../../types/groupes";
// import equipes from "../../../../_redux/reducers/equipes";
// import { RootState } from "../../../../_redux/store/configureStore";
// import { useSelector } from "react-redux";
// import ModalGroupe from "./modalGroupe";
// import CartTeam from "./cartTeam";
// import ModalGroupeA1B2 from "./modals/modalGroupeA1B2";
// import ModalGroupeB1A2 from "./modals/modalGroupeB1A2";
// import ModalGroupeC1D2 from "./modals/modalGroupeC1D2";
// import ModalGroupeD1C2 from "./modals/modalGroupeD1C2";
// import ModalGroupeE1F2 from "./modals/modalGroupeE1F2";
// import ModalGroupeF1E2 from "./modals/modalGroupeF1E2";
// import ModalGroupeG1H2 from "./modals/modalGroupeG1H2";
// import ModalGroupeH1G2 from "./modals/modalGroupeH1G2";
// import ModalGroupeA1B2C1D2 from "./modals/modalGroupeA1B2C1D2";
// import ModalGroupeB1A2D1C2 from "./modals/modalGroupeB1A2D1C2";
// import ModalGroupeE1F2G1H2 from "./modals/modalGroupeE1F2G1H2";
// import ModalGroupeF1E2H1G2 from "./modals/modalGroupeF1E2H1G2";
// import ModalGroupeA1B2C1D2E1F2G1H2 from "./modals/modalGroupeA1B2C1D2E1F2G1H2";
// import ModalGroupeB1A2D1C2F1E2H1G2 from "./modals/modalGroupeB1A2D1C2F1E2H1G2";
// import ModalGroupeChampion from "./modals/modalGroupeChampion";
// import CartTeamB1A2 from "./cartTeams/cartTeamB1A2";
// import CartTeamD1C2 from "./cartTeams/cartTeamD1C2";
// import CartTeamF1E2 from "./cartTeams/cartTeamF1E2";
// import CartTeamH1G2 from "./cartTeams/cartTeamH1G2";
// import CartTeamA1B2 from "./cartTeams/cartTeamA1B2";
// import CartTeamC1D2 from "./cartTeams/cartTeamC1D2";
// import CartTeamE1F2 from "./cartTeams/cartTeamE1F2";
// import CartTeamG1H2 from "./cartTeams/cartTeamG1H2";
// import CartTeamA1B2C1D2 from "./cartTeams/cartTeamA1B2C1D2";
// import CartTeamE1F2G1H2 from "./cartTeams/cartTeamE1F2G1H2";
// import CartTeamB1A2D1C2 from "./cartTeams/cartTeamB1A2D1C2";
// import CartTeamF1E2H1G2 from "./cartTeams/cartTeamF1E2H1G2";
// import CartTeamA1B2C1D2E1F2G1H2 from "./cartTeams/cartTeamA1B2C1D2E1F2G1H2";
// import CartTeamB1A2D1C2F1E2H1G2 from "./cartTeams/cartTeamB1A2D1C2F1E2H1G2";
// import CartTeamChampion from "./cartTeams/cartTeamChampion";
// import {
//   createDrawByAdminRoundFive,
//   createDrawByAdminRoundFour,
//   createDrawByAdminRoundFour16Teams,
//   createDrawByAdminRoundOne,
//   createDrawByAdminRoundOne16Teams,
//   createDrawByAdminRoundOne8Teams,
//   createDrawByAdminRoundThree,
//   createDrawByAdminRoundThree16Teams,
//   createDrawByAdminRoundThree8Teams,
//   createDrawByAdminRoundTwo,
//   createDrawByAdminRoundTwo16Teams,
//   createDrawByAdminRoundTwo8Teams,
//   createDrawByEmployee,
//   createDrawByEmployee16Teams,
//   createDrawByEmployee8Teams,
//   getCorrectDraw,
//   getDrawByAdmin,
//   getDrawByEmployee,
//   updateDraw,
// } from "../../../../_redux/actions/draw";
// import EmptyPageModal from "../../partner/emptyPage/emptyPageModal";
// import backgroundDraw from "../../../assets/draw.jpg";
// import { useTranslation } from "react-i18next";
// import ModalGroupeChampion16 from "./modals/modalGroupeChampion16";
// import ModalGroupeChampion8 from "./modals/modalGroupeChampion8";

// const roundOne = ["A1", "B2", "C1", "D2", "E1", "F2", "G1", "H2"];
// const roundTwo = ["A2", "B1", "C2", "D1", "E2", "F1", "G2", "H1"];
// const roundThree = ["A1B2", "C1D2", "E1F2", "G1H2"];
// const roundFour = ["B1A2", "D1C2", "F1E2", "H1G2"];
// const roundFive = ["A1B2C1D2", "E1F2G1H2"];
// const roundSix = ["B1A2D1C2", "F1E2H1G2"];
// const roundSeven = ["A1B2C1D2E1F2G1H2"];
// const roundEight = ["B1A2D1C2F1E2H1G2"];
// const roundNine = ["champion"];

// const roundOne8 = ["A1", "B2"];
// const roundTwo8 = ["A2", "B1"];

// export default function DrawPronoctics16() {
//   const user = useAppSelector(({ auth: { currentUser } }) => currentUser);
//   const GroupesEquipe = useAppSelector(
//     ({ matchsSlice: { groupeEquipe } }) => groupeEquipe
//   );

//   const employeeDraw = useAppSelector(
//     ({ drawSlice: { employeeDraw } }) => employeeDraw
//   );

//   const eventById = useAppSelector(
//     ({ eventsSlice: { eventById } }) => eventById
//   );

//   const correctDraw = useAppSelector(
//     ({ drawSlice: { correctDraw } }) => correctDraw
//   );

//   let groupesEq = useSelector(
//     (state: RootState) => state.groupesSlice.groupesEquipes
//   );
//   const { t } = useTranslation();
//   const dispatch = useAppDispatch();
//   let params = useParams();
//   const [loading, setLoading] = useState<boolean>(true);
//   const classes = useStyles();
//   const [openModal, setOpenModal] = useState(false);
//   const [openModal2, setOpenModal2] = useState(false);
//   const [openModal3, setOpenModal3] = useState(false);
//   const [openModal4, setOpenModal4] = useState(false);
//   const [openModal5, setOpenModal5] = useState(false);
//   const [openModal6, setOpenModal6] = useState(false);
//   const [openModal7, setOpenModal7] = useState(false);
//   const [openModal8, setOpenModal8] = useState(false);
//   const [openModal9, setOpenModal9] = useState(false);
//   const [openModal10, setOpenModal10] = useState(false);
//   const [openModal11, setOpenModal11] = useState(false);
//   const [openModal12, setOpenModal12] = useState(false);
//   const [openModal13, setOpenModal13] = useState(false);
//   const [openModal14, setOpenModal14] = useState(false);
//   const [openModal15, setOpenModal15] = useState(false);
//   const [openModal16, setOpenModal16] = useState(false);
//   const [openModal18, setOpenModal18] = useState(false);

//   const [groupIndex, setGroupIndex] = useState();
//   const [roundData, setRoundData] = useState();
//   const handleCloseModal = () => setOpenModal(false);
//   const handleCloseModal2 = () => setOpenModal2(false);
//   const handleCloseModal3 = () => setOpenModal3(false);
//   const handleCloseModal4 = () => setOpenModal4(false);
//   const handleCloseModal5 = () => setOpenModal5(false);
//   const handleCloseModal6 = () => setOpenModal6(false);
//   const handleCloseModal7 = () => setOpenModal7(false);
//   const handleCloseModal8 = () => setOpenModal8(false);
//   const handleCloseModal9 = () => setOpenModal9(false);
//   const handleCloseModal10 = () => setOpenModal10(false);
//   const handleCloseModal11 = () => setOpenModal11(false);
//   const handleCloseModal12 = () => setOpenModal12(false);
//   const handleCloseModal13 = () => setOpenModal13(false);
//   const handleCloseModal14 = () => setOpenModal14(false);
//   const handleCloseModal15 = () => setOpenModal15(false);
//   const handleCloseModal16 = () => setOpenModal16(false);
//   const handleCloseModal18 = () => setOpenModal18(false);

//   const handleOpenModal = (index, roundData) => {
//     setRoundData(roundData);
//     setGroupIndex(index);
//     setOpenModal(true);
//   };

//   const handleOpenModal2 = (index, roundData) => {
//     setRoundData(roundData);
//     setGroupIndex(index);
//     setOpenModal2(true);
//   };
//   const handleOpenModal3 = (index, roundData) => {
//     setRoundData(roundData);
//     setGroupIndex(index);
//     setOpenModal3(true);
//   };
//   const handleOpenModal4 = (index, roundData) => {
//     setRoundData(roundData);
//     setGroupIndex(index);
//     setOpenModal4(true);
//   };
//   const handleOpenModal5 = (index, roundData) => {
//     setRoundData(roundData);
//     setGroupIndex(index);
//     setOpenModal5(true);
//   };
//   const handleOpenModal6 = (index, roundData) => {
//     setRoundData(roundData);
//     setGroupIndex(index);
//     setOpenModal6(true);
//   };
//   const handleOpenModal7 = (index, roundData) => {
//     setRoundData(roundData);
//     setGroupIndex(index);
//     setOpenModal7(true);
//   };
//   const handleOpenModal8 = (index, roundData) => {
//     setRoundData(roundData);
//     setGroupIndex(index);
//     setOpenModal8(true);
//   };
//   const handleOpenModal9 = (index, roundData) => {
//     setRoundData(roundData);
//     setGroupIndex(index);
//     setOpenModal9(true);
//   };
//   const handleOpenModal10 = (index, roundData) => {
//     setRoundData(roundData);
//     setGroupIndex(index);
//     setOpenModal10(true);
//   };
//   const handleOpenModal11 = (index, roundData) => {
//     setRoundData(roundData);
//     setGroupIndex(index);
//     setOpenModal11(true);
//   };
//   const handleOpenModal12 = (index, roundData) => {
//     setRoundData(roundData);
//     setGroupIndex(index);
//     setOpenModal12(true);
//   };
//   const handleOpenModal13 = (index, roundData) => {
//     setRoundData(roundData);
//     setGroupIndex(index);
//     setOpenModal13(true);
//   };
//   const handleOpenModal14 = (index, roundData) => {
//     setRoundData(roundData);
//     setGroupIndex(index);
//     setOpenModal14(true);
//   };
//   const handleOpenModal15 = (index, roundData) => {
//     setRoundData(roundData);
//     setGroupIndex(index);
//     setOpenModal15(true);
//   };
//   const handleOpenModal16 = (index, roundData) => {
//     setRoundData(roundData);
//     setGroupIndex(index);
//     setOpenModal16(true);
//   };
//   const handleOpenModal18 = (index, roundData) => {
//     setRoundData(roundData);
//     setGroupIndex(index);
//     setOpenModal18(true);
//   };

//   // if (employeeDraw) {
//   //   dispatch(updateDraw(employeeDraw));
//   // }

//   useEffect(() => {
//     if (user.role === "employee") {
//       dispatch(getGroupeEquipe(params.id as string));
//       dispatch(getDrawByEmployee(params.id as string));
//     }
//     if (user.role === "admin") {
//       dispatch(getGroupeEquipeForAdmin(params.id as string));
//       dispatch(getDrawByAdmin(params.id as string));
//     }
//     dispatch(getCorrectDraw(params.id as string));

//     setTimeout(() => {
//       setLoading(false);
//     }, 800);
//   }, [dispatch, params.id, user.role]);

//   useEffect(() => {
//     dispatch(updateDraw(employeeDraw));
//   }, [dispatch, employeeDraw]);

//   const createDraw = () => {
//     dispatch(
//       createDrawByEmployee16Teams({ draw, event_id: params.id as string })
//     );
//     setTimeout(() => {
//       dispatch(getDrawByEmployee(params.id as string));
//     }, 300);
//   };

//   const createDrawEmployee8Teams = () => {
//     dispatch(
//       createDrawByEmployee8Teams({ draw, event_id: params.id as string })
//     );
//     setTimeout(() => {
//       dispatch(getDrawByEmployee(params.id as string));
//     }, 300);
//   };

//   const createDrawAdminOne = () => {
//     dispatch(
//       createDrawByAdminRoundOne16Teams({ draw, event_id: params.id as string })
//     );
//     setTimeout(() => {
//       dispatch(getDrawByAdmin(params.id as string));
//       dispatch(getCorrectDraw(params.id as string));
//     }, 300);
//   };

//   const createDrawAdminOne8Team = () => {
//     dispatch(
//       createDrawByAdminRoundOne8Teams({ draw, event_id: params.id as string })
//     );
//     setTimeout(() => {
//       dispatch(getDrawByAdmin(params.id as string));
//       dispatch(getCorrectDraw(params.id as string));
//     }, 300);
//   };

//   const createDrawAdminTwo8Team = () => {
//     dispatch(
//       createDrawByAdminRoundTwo8Teams({
//         draw,
//         event_id: params.id as string,
//       })
//     );
//     setTimeout(() => {
//       dispatch(getDrawByAdmin(params.id as string));
//       dispatch(getCorrectDraw(params.id as string));
//     }, 300);
//   };

//   const createDrawAdminThree8Team = () => {
//     dispatch(
//       createDrawByAdminRoundThree8Teams({
//         draw,
//         event_id: params.id as string,
//       })
//     );
//     setTimeout(() => {
//       dispatch(getDrawByAdmin(params.id as string));
//       dispatch(getCorrectDraw(params.id as string));
//     }, 300);
//   };

//   const createDrawAdminTwo = () => {
//     dispatch(
//       createDrawByAdminRoundTwo16Teams({ draw, event_id: params.id as string })
//     );
//     setTimeout(() => {
//       dispatch(getDrawByAdmin(params.id as string));
//       dispatch(getCorrectDraw(params.id as string));
//     }, 300);
//   };

//   const createDrawAdminThree = () => {
//     dispatch(
//       createDrawByAdminRoundThree16Teams({
//         draw,
//         event_id: params.id as string,
//       })
//     );
//     setTimeout(() => {
//       dispatch(getDrawByAdmin(params.id as string));
//       dispatch(getCorrectDraw(params.id as string));
//     }, 300);
//   };

//   const createDrawAdminFour = () => {
//     dispatch(
//       createDrawByAdminRoundFour16Teams({ draw, event_id: params.id as string })
//     );
//     setTimeout(() => {
//       dispatch(getDrawByAdmin(params.id as string));
//       dispatch(getCorrectDraw(params.id as string));
//     }, 300);
//   };

//   const createDrawAdminFive = () => {
//     dispatch(
//       createDrawByAdminRoundFive({ draw, event_id: params.id as string })
//     );
//     setTimeout(() => {
//       dispatch(getDrawByAdmin(params.id as string));
//       dispatch(getCorrectDraw(params.id as string));
//     }, 300);
//   };

//   const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     borderBottom: 0,

//     [`&.${tableCellClasses.head}`]: {
//       background: "#2192ff",
//       color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 14,
//     },
//   }));

//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     "&:nth-of-type(odd)": {},
//     // hide last border
//     "&:last-child td, &:last-child th": {
//       border: 0,
//     },
//   }));

//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   }));

//   const style = {
//     position: "absolute" as "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 300,
//     background: "#fff",
//     borderRadius: "15px",
//     boxShadow: "0px 15px 20px rgba(0,0,0,0.1)",
//     transition: "all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55)",
//   };
//   const draw = useAppSelector(({ drawSlice: { draw } }) => draw);

//   const [value, setValue] = React.useState({
//     id: "",
//     name: "",
//     country: "",
//     icon: "",
//     createdAt: "",
//     updatedAt: "",
//   });

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(value);
//     dispatch(value.id as any);
//   };

//   const handleChange2 = (event: SelectChangeEvent) => {
//     const data = groupesEq.find((value) => value.id === event.target.value);
//     if (data) {
//       setValue(data as any);
//       dispatch(getGroupeEquipe(data.id as any));
//     }
//     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
//     [
//       dispatch,
//       data.order.map((eq, index) => {
//         // eslint-disable-next-line @typescript-eslint/no-unused-expressions
//         eq.equipes.id;
//       }),
//     ];
//   };

//   return (
//     <Box
//       style={{
//         backgroundImage: `url(${backgroundDraw})`,
//         backgroundRepeat: "no-repeat !important",
//         backgroundSize: "cover",
//         backgroundPosition: "center !important",
//       }}
//     >
//       <Container
//         style={{
//           paddingBottom: "100px",
//           // minWidth: "1250px",
//         }}
//       >
//         {loading ? (
//           <CircleLoading loading={loading} />
//         ) : (
//           <>
//             <TableContainer component={Paper}>
//               <Table aria-label="customized table">
//                 <TableHead>
//                   <TableRow>
//                     {GroupesEquipe &&
//                       GroupesEquipe.map((el, index) => (
//                         <StyledTableCell
//                           style={{
//                             textAlign: "center",
//                           }}
//                           key={index}
//                         >
//                           <p className={classes.nameGroupes}>{el.name}</p>
//                         </StyledTableCell>
//                       ))}
//                   </TableRow>
//                 </TableHead>

//                 <TableRow>
//                   {GroupesEquipe &&
//                     GroupesEquipe.map((el, index) => (
//                       <StyledTableCell
//                         style={{
//                           background: "#fcfcfc",
//                           border: "solid 1px #d6d6d6",
//                         }}
//                         key={index}
//                       >
//                         {el &&
//                           el.order.map((row, index) => (
//                             <Grid key={index}>
//                               {" "}
//                               <StyledTableCell
//                                 component="th"
//                                 scope="row"
//                                 style={{
//                                   background: "#fcfcfc",
//                                   width: "10%",
//                                   textAlign: "center",
//                                 }}
//                               >
//                                 <div
//                                   style={{
//                                     display: "flex",
//                                     alignItems: "center",
//                                   }}
//                                 >
//                                   <img
//                                     // src={`https://flagcdn.com/w20/${row.equipes.icon.toLowerCase()}.png`}
//                                     src={
//                                       (process.env.REACT_APP_UPLOADS_LOGO +
//                                         row.equipes.images) as any
//                                     }
//                                     width="20"
//                                     height="13"
//                                     alt="Country flag"
//                                     className={classes.flagImgGroupe}
//                                   ></img>
//                                   <p className={classes.teamGroupe}>
//                                     {row.equipes.name}
//                                   </p>
//                                 </div>
//                               </StyledTableCell>
//                             </Grid>
//                           ))}
//                       </StyledTableCell>
//                     ))}{" "}
//                 </TableRow>
//               </Table>
//             </TableContainer>
//             <Typography align="center" variant="h2" marginTop={4}>
//               {" "}
//               {t("employee.Qualification.winningTeamFor")}
//             </Typography>
//             <Typography align="center" variant="h3" marginBottom={4}>
//               {" "}
//               {eventById && eventById.name}
//             </Typography>
//             {user.role === "admin" && (
//               <>
//                 {!employeeDraw && !employeeDraw.A1 && (
//                   <ModalGroupe
//                     openModal={openModal}
//                     handleCloseModal={handleCloseModal}
//                     groupIndex={groupIndex}
//                     roundData={roundData}
//                   />
//                 )}
//                 {employeeDraw && employeeDraw.A1 && (
//                   <>
//                     <ModalGroupeA1B2
//                       openModal={openModal2}
//                       handleCloseModal={handleCloseModal2}
//                       groupIndex={groupIndex}
//                       roundData={roundData}
//                     />
//                     <ModalGroupeB1A2
//                       openModal={openModal3}
//                       handleCloseModal={handleCloseModal3}
//                       groupIndex={groupIndex}
//                       roundData={roundData}
//                     />
//                     <ModalGroupeC1D2
//                       openModal={openModal4}
//                       handleCloseModal={handleCloseModal4}
//                       groupIndex={groupIndex}
//                       roundData={roundData}
//                     />
//                     <ModalGroupeD1C2
//                       openModal={openModal5}
//                       handleCloseModal={handleCloseModal5}
//                       groupIndex={groupIndex}
//                       roundData={roundData}
//                     />
//                   </>
//                 )}
//                 {employeeDraw && employeeDraw.A1B2 && (
//                   <>
//                     <ModalGroupeA1B2C1D2
//                       openModal={openModal10}
//                       handleCloseModal={handleCloseModal10}
//                       groupIndex={groupIndex}
//                       roundData={roundData}
//                     />
//                     <ModalGroupeB1A2D1C2
//                       openModal={openModal11}
//                       handleCloseModal={handleCloseModal11}
//                       groupIndex={groupIndex}
//                       roundData={roundData}
//                     />
//                     <ModalGroupeE1F2G1H2
//                       openModal={openModal12}
//                       handleCloseModal={handleCloseModal12}
//                       groupIndex={groupIndex}
//                       roundData={roundData}
//                     />
//                     <ModalGroupeF1E2H1G2
//                       openModal={openModal13}
//                       handleCloseModal={handleCloseModal13}
//                       groupIndex={groupIndex}
//                       roundData={roundData}
//                     />
//                   </>
//                 )}

//                 {employeeDraw && employeeDraw.A1B2C1D2 && (
//                   <>
//                     <ModalGroupeA1B2C1D2E1F2G1H2
//                       openModal={openModal14}
//                       handleCloseModal={handleCloseModal14}
//                       groupIndex={groupIndex}
//                       roundData={roundData}
//                     />
//                     <ModalGroupeB1A2D1C2F1E2H1G2
//                       openModal={openModal15}
//                       handleCloseModal={handleCloseModal15}
//                       groupIndex={groupIndex}
//                       roundData={roundData}
//                     />
//                   </>
//                 )}
//                 {employeeDraw && employeeDraw.A1B2 && (
//                   <ModalGroupeChampion8
//                     openModal={openModal18}
//                     handleCloseModal={handleCloseModal18}
//                     groupIndex={groupIndex}
//                     roundData={roundData}
//                   />
//                 )}
//               </>
//             )}
//             {user.role === "employee" && !employeeDraw && (
//               <>
//                 <ModalGroupe
//                   openModal={openModal}
//                   handleCloseModal={handleCloseModal}
//                   groupIndex={groupIndex}
//                   roundData={roundData}
//                 />
//                 <ModalGroupeA1B2
//                   openModal={openModal2}
//                   handleCloseModal={handleCloseModal2}
//                   groupIndex={groupIndex}
//                   roundData={roundData}
//                 />
//                 <ModalGroupeB1A2
//                   openModal={openModal3}
//                   handleCloseModal={handleCloseModal3}
//                   groupIndex={groupIndex}
//                   roundData={roundData}
//                 />
//                 <ModalGroupeC1D2
//                   openModal={openModal4}
//                   handleCloseModal={handleCloseModal4}
//                   groupIndex={groupIndex}
//                   roundData={roundData}
//                 />
//                 <ModalGroupeD1C2
//                   openModal={openModal5}
//                   handleCloseModal={handleCloseModal5}
//                   groupIndex={groupIndex}
//                   roundData={roundData}
//                 />
//                 <ModalGroupeE1F2
//                   openModal={openModal6}
//                   handleCloseModal={handleCloseModal6}
//                   groupIndex={groupIndex}
//                   roundData={roundData}
//                 />
//                 <ModalGroupeF1E2
//                   openModal={openModal7}
//                   handleCloseModal={handleCloseModal7}
//                   groupIndex={groupIndex}
//                   roundData={roundData}
//                 />
//                 <ModalGroupeG1H2
//                   openModal={openModal8}
//                   handleCloseModal={handleCloseModal8}
//                   groupIndex={groupIndex}
//                   roundData={roundData}
//                 />
//                 <ModalGroupeH1G2
//                   openModal={openModal9}
//                   handleCloseModal={handleCloseModal9}
//                   groupIndex={groupIndex}
//                   roundData={roundData}
//                 />

//                 <ModalGroupeA1B2C1D2
//                   openModal={openModal10}
//                   handleCloseModal={handleCloseModal10}
//                   groupIndex={groupIndex}
//                   roundData={roundData}
//                 />
//                 <ModalGroupeB1A2D1C2
//                   openModal={openModal11}
//                   handleCloseModal={handleCloseModal11}
//                   groupIndex={groupIndex}
//                   roundData={roundData}
//                 />
//                 <ModalGroupeE1F2G1H2
//                   openModal={openModal12}
//                   handleCloseModal={handleCloseModal12}
//                   groupIndex={groupIndex}
//                   roundData={roundData}
//                 />
//                 <ModalGroupeF1E2H1G2
//                   openModal={openModal13}
//                   handleCloseModal={handleCloseModal13}
//                   groupIndex={groupIndex}
//                   roundData={roundData}
//                 />
//                 <ModalGroupeA1B2C1D2E1F2G1H2
//                   openModal={openModal14}
//                   handleCloseModal={handleCloseModal14}
//                   groupIndex={groupIndex}
//                   roundData={roundData}
//                 />
//                 <ModalGroupeB1A2D1C2F1E2H1G2
//                   openModal={openModal15}
//                   handleCloseModal={handleCloseModal15}
//                   groupIndex={groupIndex}
//                   roundData={roundData}
//                 />

//                 <ModalGroupeChampion16
//                   openModal={openModal16}
//                   handleCloseModal={handleCloseModal16}
//                   groupIndex={groupIndex}
//                   roundData={roundData}
//                 />
//                 <ModalGroupeChampion8
//                   openModal={openModal18}
//                   handleCloseModal={handleCloseModal18}
//                   groupIndex={groupIndex}
//                   roundData={roundData}
//                 />
//               </>
//             )}

//             <>
//               <Typography align="center" variant="h5">
//                 <hr></hr>
//                 {t("employee.Qualification.semiFinals")}
//               </Typography>

//               <Grid
//                 container
//                 rowSpacing={4}
//                 columnSpacing={{ xs: 1, sm: 8, md: 8 }}
//                 sx={{ mt: 1 }}
//               >
//                 <Grid
//                   item
//                   xs={6}
//                   sx={{
//                     display: "grid",
//                     gap: 1,
//                     gridTemplateColumns: "repeat(2, 1fr)",
//                   }}
//                 >
//                   {Array.apply(null, Array(2)).map((element, index) => (
//                     <CartTeam
//                       handleOpenModal={() => handleOpenModal(index, roundOne)}
//                       groupIndex={index}
//                       roundData={roundOne}
//                       roundDataTwo={roundTwo}
//                       name={roundOne[index]}
//                     />
//                   ))}
//                 </Grid>
//                 <Grid
//                   item
//                   xs={6}
//                   sx={{
//                     display: "grid",
//                     gap: 1,
//                     gridTemplateColumns: "repeat(2, 1fr)",
//                   }}
//                 >
//                   {Array.apply(null, Array(2)).map((element, index) => (
//                     <CartTeam
//                       handleOpenModal={() => handleOpenModal(index, roundTwo)}
//                       groupIndex={index}
//                       roundData={roundTwo}
//                       roundDataTwo={roundOne}
//                       name={roundTwo[index]}
//                       sx={{
//                         mt: 5,
//                       }}
//                     />
//                   ))}
//                 </Grid>
//               </Grid>
//               <Grid
//                 container
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 {user?.role === "admin" && !employeeDraw.A1 && (
//                   <Button
//                     style={{
//                       background:
//                         "-webkit-linear-gradient(left, #2192ff, #135799)",
//                       color: "white",
//                       textTransform: "capitalize",
//                       width: "80px",
//                       height: "40px",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       marginTop: "20px",
//                       textAlign: "center",
//                       fontWeight: "bold",
//                     }}
//                     type="button"
//                     onClick={createDrawAdminOne8Team}
//                   >
//                     {t("employee.Qualification.send")}
//                   </Button>
//                 )}
//               </Grid>

//               <Typography align="center" variant="h5" marginTop={4}>
//                 <hr></hr>
//                 {t("employee.Qualification.final")}
//               </Typography>

//               <Grid
//                 container
//                 rowSpacing={4}
//                 columnSpacing={{ xs: 1, sm: 8, md: 8 }}
//                 sx={{ mt: 1 }}
//               >
//                 <Grid
//                   item
//                   xs={12}
//                   sx={{
//                     display: "grid",
//                     gap: 1,
//                     gridTemplateColumns: "repeat(2, 1fr)",
//                   }}
//                 >
//                   <CartTeamA1B2
//                     handleOpenModal={() => handleOpenModal2(0, roundThree)}
//                     groupIndex={0}
//                     roundData={roundThree}
//                     roundDataTwo={roundFour}
//                     name={roundThree[0]}
//                   />
//                   <CartTeamB1A2
//                     handleOpenModal={() => handleOpenModal3(0, roundFour)}
//                     groupIndex={0}
//                     roundData={roundFour}
//                     roundDataTwo={roundThree}
//                     name={roundFour[0]}
//                   />
//                 </Grid>
//               </Grid>
//               <Grid
//                 container
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 {user?.role === "admin" &&
//                   employeeDraw.A1 &&
//                   !employeeDraw.A1B2 && (
//                     <Button
//                       style={{
//                         background:
//                           "-webkit-linear-gradient(left, #2192ff, #135799)",
//                         color: "white",
//                         textTransform: "capitalize",
//                         width: "80px",
//                         height: "40px",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         marginTop: "20px",
//                         textAlign: "center",
//                         fontWeight: "bold",
//                       }}
//                       type="button"
//                       onClick={createDrawAdminTwo8Team}
//                     >
//                       {t("employee.Qualification.send")}
//                     </Button>
//                   )}
//               </Grid>

//               <Typography
//                 align="center"
//                 variant="h5"
//                 marginTop={6}
//                 marginBottom={2}
//               >
//                 <hr></hr>
//                 {t("employee.Qualification.champion")}
//               </Typography>

//               <Grid
//                 item
//                 xs={12}
//                 sx={{
//                   display: "grid",
//                   gap: 1,
//                   mb: 4,
//                 }}
//               >
//                 <CartTeamChampion
//                   handleOpenModal={() => handleOpenModal18(0, roundNine)}
//                   groupIndex={0}
//                   roundData={roundNine}
//                   name={roundNine[0]}
//                 />
//               </Grid>
//               <Grid
//                 container
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 {user?.role === "admin" &&
//                   employeeDraw.A1B2 &&
//                   !employeeDraw.champion && (
//                     <Button
//                       style={{
//                         background:
//                           "-webkit-linear-gradient(left, #2192ff, #135799)",
//                         color: "white",
//                         textTransform: "capitalize",
//                         width: "80px",
//                         height: "40px",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         marginTop: "20px",
//                         marginBottom: "30px",
//                         textAlign: "center",
//                         fontWeight: "bold",
//                       }}
//                       type="button"
//                       onClick={createDrawAdminThree8Team}
//                     >
//                       {t("employee.Qualification.send")}
//                     </Button>
//                   )}
//               </Grid>
//               <hr></hr>
//               <Grid
//                 container
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 {user?.role === "employee" && !employeeDraw && (
//                   <Button
//                     style={{
//                       background:
//                         "-webkit-linear-gradient(left, #2192ff, #135799)",
//                       color: "white",
//                       textTransform: "capitalize",
//                       width: "100px",
//                       height: "50px",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       marginTop: "100px",
//                       textAlign: "center",
//                       fontWeight: "bold",
//                     }}
//                     type="button"
//                     onClick={createDrawEmployee8Teams}
//                   >
//                     {t("employee.Qualification.send")}
//                   </Button>
//                 )}
//               </Grid>
//             </>
//           </>
//         )}
//       </Container>
//     </Box>
//   );
// }
