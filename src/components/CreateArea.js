import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from '@mui/material';

function CreateArea(props) {
	const [note, setNote] = useState({
		title: '',
		content: '',
	});

	const [isFocus, setIsFocus] = useState(false);

	function handleFocus() {
		setIsFocus(true);
	}

	function handleChange(event) {
		const { name, value } = event.target;

		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}

	function submitNote(event) {
		props.onAdd(note);
		setNote({
			title: '',
			content: '',
		});
		setIsFocus(false);
		event.preventDefault();
	}

	return (
		<div>
			<form className="create-note">
				<input
					name="title"
					onChange={handleChange}
					onFocus={handleFocus}
					value={note.title}
					placeholder="Title"
					type={isFocus ? 'text' : 'hidden'}
				/>
				<textarea
					name="content"
					onChange={handleChange}
					onFocus={handleFocus}
					value={note.content}
					placeholder="Take a note..."
					rows={isFocus ? 3 : 1}
				/>
				<Zoom in={isFocus ? true : false}>
					<Fab onClick={submitNote}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
