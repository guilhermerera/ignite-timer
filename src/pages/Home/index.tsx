import { Play } from "phosphor-react";
import {
	CountdownContainer,
	FormContainer,
	HomeContainer,
	MinutesAmountInput,
	Separator,
	StartCountdownButton,
	TaskInput
} from "./styles";

export function Home() {
	return (
		<HomeContainer>
			<form action=''>
				<FormContainer>
					<label htmlFor='task'>I'll work on</label>
					<TaskInput
						id='task'
						type='text'
						placeholder='Insert a task name to work on'
						list="task-suggestions"
					/>
					<datalist id="task-suggestions">
						<option value="Project 1" />
						<option value="Project 2" />
						<option value="Project 3" />
						<option value="Project 4" />
						<option value="Project 5"/>

					</datalist>
					<label htmlFor='minutesAmount'>for</label>
					<MinutesAmountInput
						id='minutesAmount'
						type='number'
						placeholder='00'
						step={5}
						min={5}
						max={60}
					/>
					<span>minutes.</span>
				</FormContainer>

				<CountdownContainer>
					<span>0</span>
					<span>0</span>
					<Separator>:</Separator>
					<span>0</span>
					<span>0</span>
				</CountdownContainer>

				<StartCountdownButton type='submit'>
					<Play size={24} />
					Start
				</StartCountdownButton>
			</form>
		</HomeContainer>
	);
}
