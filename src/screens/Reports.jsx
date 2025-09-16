import { memo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid, Typography, LinearProgress } from "@mui/material";
import { useSnackbar, jwt } from "#utils";
import { ThirdBackgroundButton } from "../components/Buttons.jsx";
import ReportsDatatable from "../components/ReportsDataTable.jsx";
import { useOrders, useOrganizationNis2Questionnaires } from "../api/index.js"
import QuestionnairesDatatable from "../components/QuestionnairesDataTable.jsx";

const Reports = () => {
	const { organizationId } = useParams();
	const { id: userId } = jwt.decode();
	const { error } = useSnackbar();
	const navigate = useNavigate();

	const { orders = [], isLoading: isOrdersLoading, isError: isOrdersError } = useOrders();
	const { orgQuestionnaires = [], isLoading: isQuestionnairesLoading, isError: isQuestionnairesError, mutate: mutateQuestionnaires } = useOrganizationNis2Questionnaires(organizationId);
	const [selectedOrder, setSelectedOrder] = useState({})

	// select the order if there is only one available
	useEffect(() => {
		if (isOrdersLoading || !orders?.length) return;

		const matchingOrder = orders.find((order) => order.assignments.organization.toString() === organizationId);

		if (matchingOrder) {
			setSelectedOrder(matchingOrder);
		} else {
			error();
			navigate("/");
		}
	}, [error, isOrdersLoading, navigate, orders, organizationId]);

	useEffect(() => {
		if (isOrdersError || isQuestionnairesError) error();
	}, [error, isOrdersError, isQuestionnairesError]);

	return (
		<>
			{isOrdersLoading && (<LinearProgress />)}
			<Grid container className="header-container" display="flex" direction="column">
				<Grid container display="flex" direction="column" sx={{ py: "2rem"}}>
					<Grid display="flex" justifyContent="space-between" alignItems="center">
						<Typography variant="h4">{"RECENT REPORTS"}</Typography>
						<ThirdBackgroundButton
							width="auto"
							disabled={isOrdersLoading}
							title="Start new Analysis"
							onClick={() => navigate("/")}
						/>
					</Grid>
					<Grid item display="flex">
						<Typography variant="h6">{`Remaining: ${selectedOrder?.subscription?.services?.nis2?.remainingReports}/${selectedOrder?.subscription?.services?.nis2?.reports}`}</Typography>
					</Grid>
				</Grid>
				<Grid>
					<ReportsDatatable orders={orders} isOrdersLoading={isOrdersLoading} selectedOrder={selectedOrder} userId={userId} />
				</Grid>
				<Grid display="flex" direction="column" sx={{ py: "2rem"}}>
					<Typography variant="h4">{"SAVED QUESTIONNAIRES"}</Typography>
				</Grid>
				<Grid>
					<QuestionnairesDatatable questionnaires={orgQuestionnaires} isQuestionnairesLoading={isQuestionnairesLoading} mutateQuestionnaires={mutateQuestionnaires} selectedOrder={selectedOrder} userId={userId} organizationId={organizationId}/>
				</Grid>
			</Grid>
		</>
	);
}

export default memo(Reports);