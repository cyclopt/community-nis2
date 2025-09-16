import { memo, useMemo, useState } from "react";
import { Grid, Box, Typography, IconButton, DialogContentText, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Visibility, Delete } from "@mui/icons-material";
import Modal from "./Modal.jsx";
import theme from "../theme.js";

import { dayjs, useSnackbar, DATE_FORMAT } from "#utils";
import { deleteNis2Questionnaire } from "../api/index.js"

import DataTable from "./DataTable.jsx"

const QuestionnairesDataTable = ({ questionnaires, isQuestionnairesLoading, mutateQuestionnaires, selectedOrder, userId, organizationId }) => {
	const [isDeleting, setIsDeleting] = useState(false)
	const [deleteQuestionnaireId, setDeleteQuestionnaireId] = useState(null);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const { success, error } = useSnackbar();
	const navigate = useNavigate();

	const userIsAdmin = useMemo(() => userId.toString() === selectedOrder?.user, [selectedOrder, userId])

	const tableColumns = useMemo(() => [
		{
			field: "Questionnaire",
			minWidth: 200,
			flex: 1,
			valueGetter: ({ row }) => row?.name || null,
			renderCell: ({ value}) => (
				<Box sx={{ display: "block" }}>
					{value ? (<Typography>{value}</Typography>) : (<Typography>{"-"}</Typography>)}
				</Box>
			),
		},
		...(userIsAdmin ? [
			{
				field: "Email",
				minWidth: 200,
				flex: 1,
				valueGetter: ({ row }) => row.email,
				renderCell: ({ value }) => (
					<Box sx={{ display: "block" }}>
						<Typography>{value || "-"}</Typography>
					</Box>
				),
			}
		] : []),
		{
			field: "Created at",
			minWidth: 200,
			flex: 1,
			valueGetter: ({ row }) => row.createdAt,
			renderCell: ({ value}) => (
				<Box sx={{ display: "block" }}>
					<Typography>{dayjs(value).format(DATE_FORMAT)}</Typography>
				</Box>
			),
		},
		{
			field: "Updated at",
			minWidth: 200,
			flex: 1,
			valueGetter: ({ row }) => row.updatedAt,
			renderCell: ({ value}) => (
				<Box sx={{ display: "block" }}>
					<Typography>{dayjs(value).format(DATE_FORMAT)}</Typography>
				</Box>
			),
		},
		{
			field: "Actions",
			disableExport: true,
			sortable: false,
			width: 100,
			flex: 1,
			valueGetter: ({ row }) => row._id,
			renderCell: ({ _, value }) => (
				<Box  sx={{ display: "flex", gap: "1rem" }}>
					<IconButton
						sx={{
							border: `2px solid ${theme.palette.primary.main}`,
							borderRadius: "8px",
							color: theme.palette.primary.main,
						}}
					>
						<Visibility onClick={() => {
							navigate(`/organizations/${organizationId}/questionnaires/${value}?edit=true`)
						}}/>
					</IconButton>
					<IconButton
						sx={{
							border: `2px solid ${theme.palette.third.main}`,
							borderRadius: "8px",
							color: theme.palette.third.main,
						}}
					>
						<Delete onClick={() => {
							setDeleteQuestionnaireId(value);
							setOpenDeleteModal(true)
						}}/>
					</IconButton>
				</Box>
			),
		},
	], [userIsAdmin]);

	return (
		<>
			<Grid container className="item" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<DataTable
					rows={questionnaires}
					loading={isQuestionnairesLoading}
					columns={tableColumns}
					initialState={{ sorting: { sortModel: [{ field: "Last Active", sort: "desc" }] }, pagination: { paginationModel: { page: 0 } } }} />
			</Grid>
			<Modal
				title={"Are you sure?"}
				disableAreYouSureDialog={true}
				open={openDeleteModal}
				widthAuto="max-content"
				actions={
					<>
						<Button
							autoFocus
							disabled={isDeleting}
							startIcon={<Delete />}
							variant="contained"
							onClick={async () => {
								try {
									setIsDeleting(true);
									await deleteNis2Questionnaire(deleteQuestionnaireId);
									setOpenDeleteModal(false);
									mutateQuestionnaires();
									success("Questionnaire deleted.");
									setIsDeleting(false);
								} catch {
									setIsDeleting(false);
									error();
								}
							} }
						>
							{"Delete"}
						</Button>
						<Button
							variant="outlined"
							disabled={isDeleting}
							onClick={() => setOpenDeleteModal(false)}
						>
							{"Cancel"}
						</Button>
					</>
				}
				onClose={() => setOpenDeleteModal(false)}
			>
				<DialogContentText>
					{"Are you sure you want to delete this questionnaire?"}
				</DialogContentText>
			</Modal>
		</>
	)

}

QuestionnairesDataTable.propTypes = {
	questionnaires: PropTypes.array,
	isQuestionnairesLoading: PropTypes.bool,
	mutateQuestionnaires: PropTypes.func,
	selectedOrg: PropTypes.object,
	userId: PropTypes.string,
	organizationId: PropTypes.string,
};
export default memo(QuestionnairesDataTable);