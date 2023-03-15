import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AccountMenu from './AccountMenu';
import BasicForm from './BasicForm';
import TodoTable from './TodoTable';

export default function App() {
	const [openForm, setOpenForm] = React.useState(false);
	const handleOnClick = (page) => {
		console.log('open');
		if (!openForm) {
			setOpenForm(true)
		} else {
			setOpenForm(false)
		}
	};
	const [data, setData] = React.useState([]);
	const onAddTodo = (value) => {
		setData(preData => [...preData, { text: value.todo }]);
	}

	const onDelete = (index) => {
		const newData = [...data]
		newData.splice(index, 1);
		setData(newData)
	}

	return (
		<Container maxWidth="sm">
			<AccountMenu onClick={handleOnClick} />
			{openForm && <Stack direction="column">
				<BasicForm onAddTodo={onAddTodo} />

				<Box sx={{ my: 4 }}>
					<h3>Todo Table</h3>
					<TodoTable todos={data} onDelete={onDelete} />
				</Box>
			</Stack>}

			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h1" gutterBottom>
					React Skills test
				</Typography>
			</Box>
		</Container>
	);
}
