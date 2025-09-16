import { memo, useState, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Tooltip, Paper, Breadcrumbs, Box, Button, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { WhiteBorderButton } from "./Buttons.jsx";
import { shallow } from "zustand/shallow";

import { Home as HomeIcon, Logout, ExpandMore, ViewList as ViewListIcon, } from "@mui/icons-material";
import cycloptLogo from "../assets/images/cyclopt_logo_with_text_white.svg";

import { Image } from "mui-image";

import { jwt, capitalize } from "#utils";

import { useOrders } from "../api/index.js";

import useGlobalState from "../use-global-state.js";

const styles = {
	grow: {
		flexBasis: "auto",
		elevation: 0,
	},
	root: {
		width: "100%",
		px: 0,
		py: 1,
		borderRadius: "0px",
		bgcolor: "#ccd9e2",
	},
	icon: {
		mr: 0.5,
		width: 20,
		height: 20,
	},
	menuItemButton: {
		width: "100%",
		bgcolor: "grey.light",
		"&:hover": {
			bgcolor: "grey.dark",
		},
	},
	grey: {
		color: "grey.500",
	},
};

const Header = () => {
	const { orders = [], isLoading: isOrdersLoading,  mutate: ordersMutate } = useOrders();
	const location = useLocation();
	const navigate = useNavigate();
	const [anchorElOrganizations, setAnchorElOrganizations] = useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

	const handleOrganizationsMenuOpen = (event) => { ordersMutate(); setAnchorElOrganizations(event.currentTarget); };
	const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

	const {
		organizationName,
		questionnaireName,
	} = useGlobalState(useCallback((e) => ({
		organizationName: e.organizationName,
		questionnaireName: e.questionnaireName,
	}), []), shallow);

	const { setOrganizationName } = useGlobalState(useCallback((e) => ({
		setOrganizationName: e.setOrganizationName,
	}), []));

	const isMenuOpenOrganizations = Boolean(anchorElOrganizations);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleOrganizationsMenuClose = () => { setAnchorElOrganizations(null); handleMobileMenuClose(); };
	const CrumpLink = styled(Link)(({ theme }) => ({ display: "flex", color: theme.palette.primary.main }));

	const renderMenu = (
		<>
			{orders.length > 0 && (
				<Menu
					keepMounted
					anchorEl={anchorElOrganizations}
					anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
					transformOrigin={{ vertical: "top", horizontal: "right" }}
					open={isMenuOpenOrganizations}
					onClose={handleOrganizationsMenuClose}
					sx={{ position: "absolute" }}
				>
					{[...orders].sort((v) => v.organizationName).map((e) => (
						<MenuItem key={`${e._id}_organizationMenu}`} onClick={handleOrganizationsMenuClose}>
							<Button
								component={Link}
								to={`/organizations/${e.assignments.organization.toString()}/reports`}
								variant="contained"
								sx={styles.menuItemButton}
								onClick={() => setOrganizationName(e.organizationName)}
							>
								<Typography noWrap sx={{ maxWidth: 250, color: 'primary.main' }}>
									{e.organizationName}
								</Typography>
							</Button>
						</MenuItem>
					))}
				</Menu>
			)}
		</>
	);

	const renderMobileMenu = (
		<Menu
			keepMounted
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
			sx={{ position: "absolute" }}
		>
			<MenuItem onClick={orders.length > 0 ? handleOrganizationsMenuOpen : () => { handleMobileMenuClose(); }}>
				<IconButton color="primary"><ViewListIcon /></IconButton>
				<p>{"Organizations"}</p>
			</MenuItem>
		</Menu>
	);

	const pathnames = location.pathname.split("/").filter(Boolean);
	const query = location.search; 
	const crumps = [];
	crumps.push(<CrumpLink to="/home" style={{ textDecoration: "none" }}> <HomeIcon sx={styles.icon} /> {"Home"} </CrumpLink>)
	if (!pathnames.includes("home")) {
		const fullPath = `/${pathnames.join("/")}${query}`;
		for (const [ind] of pathnames.entries()) {
			if (pathnames[ind - 1] === "organizations") pathnames[ind] = organizationName || "...";
			if (pathnames[ind - 1] === "questionnaires") pathnames[ind] = questionnaireName || "...";
		}
		const label = pathnames.length === 1
			? capitalize(pathnames.join("/"))
			: pathnames.join("/");

		crumps.push(
			<CrumpLink to={fullPath} style={{ textDecoration: "none" }}>
				{label}
			</CrumpLink>
		);
	}

	// check if we are in home page
	// we use that to change the redirection button in header
	const atHomePage = pathnames.includes("home");

	return (
		<>
			<AppBar position="static" sx={styles.grow}>
				<Toolbar className="header-container" sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
					<Box component={Link} to="/">
						<Image src={cycloptLogo} alt="Cyclopt" width="10rem" sx={{ my: 1, minWidth: "130px" }} />
					</Box>
					<Box display="flex" flexDirection="row" sx={{ gap: "2rem" }}>
						<WhiteBorderButton
							disabled={isOrdersLoading || orders.length === 0}
							width="auto"
							title={atHomePage ? "Recent Reports" : "Home"}
							onClick={(event) => {
								if (atHomePage) {
									if (orders.length > 0 ){
										handleOrganizationsMenuOpen(event);
									}
								} else {
									navigate("/");
								}
							}}
						>
							{(orders.length > 0 && atHomePage) && <ExpandMore />}
						</WhiteBorderButton>
						<Tooltip  title="Log Out">
							<IconButton color="inherit" onClick={() => {
								jwt.destroyTokens();
								navigate("/");
							}}
							><Logout /></IconButton>
						</Tooltip>
					</Box>
				</Toolbar>
				<Paper elevation={0} sx={styles.root}>
					<Box className="header-container" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
						<Breadcrumbs>{crumps.map((e, ind) => <div key={`crump_${ind}`}>{e}</div>)}</Breadcrumbs>
					</Box>
				</Paper>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</>
	);
};

export default memo(Header);
