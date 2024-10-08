import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button, { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { Container, Box, IconButton, Menu, MenuItem } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'
import MenuIcon from '@mui/icons-material/Menu'

type ButtonLinkProps = ButtonProps & LinkProps

const StyledButton = styled(Button)<ButtonLinkProps>({
	color: 'white',
	':hover': {
		color: 'black',
	},
})

const pages = ['Recipes', 'Add Recipe']
const pagesDirect = ['/', '/add_recipe']

function MenuBar() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	return (
		<AppBar>
			<Container maxWidth={false}>
				<Toolbar disableGutters>
					<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant='h6'
						sx={{
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
						}}
					>
						LOGO
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>
										<Link
											to={pagesDirect[pages.indexOf(page)]}
											style={{ textDecoration: 'none', color: 'inherit' }}
										>
											{page}
										</Link>
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant='h6'
						sx={{
							display: { xs: 'flex', md: 'none' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
						}}
					>
						LOGO
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						{pages.map((page, index) => (
							<StyledButton
								key={index}
								component={Link}
								to={pagesDirect[index]}
							>
								{page}
							</StyledButton>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default MenuBar
