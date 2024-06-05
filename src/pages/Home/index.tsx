import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import {
	CountdownContainer,
	FormContainer,
	HomeContainer,
	MinutesAmountInput,
	Separator,
	StartCountdownButton,
	TaskInput
} from "./styles";

const newCycleFormSchema = zod.object({
	task: zod.string().min(1, "Task name is required"),
	minutesAmount: zod
		.number()
		.min(5, "Cycle needs to be at least 5 minutes")
		.max(60, "Cycle needs to be less than 60 minutes")
});

export function Home() {
	const { register, handleSubmit, watch } = useForm({
		resolver: zodResolver(newCycleFormSchema)
	});

	function handleCreateNewCycle(data: any) {}

	const task = watch("task");
	const shouldSubmitBeDisabled = !task;

	return (
		<HomeContainer>
			<form onSubmit={handleSubmit(handleCreateNewCycle)}>
				<FormContainer>
					<label htmlFor='task'>I'll work on</label>
					<TaskInput
						id='task'
						type='text'
						placeholder='Insert a task name to work on'
						list='task-suggestions'
						{...register("task")}
					/>
					<datalist id='task-suggestions'>
						<option value='Project 1' />
						<option value='Project 2' />
						<option value='Project 3' />
						<option value='Project 4' />
						<option value='Project 5' />
					</datalist>
					<label htmlFor='minutesAmount'>for</label>
					<MinutesAmountInput
						id='minutesAmount'
						type='number'
						placeholder='00'
						defaultValue={5}
						step={5}
						min={5}
						max={60}
						{...register("minutesAmount", { valueAsNumber: true })}
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

				<StartCountdownButton disabled={shouldSubmitBeDisabled} type='submit'>
					<Play size={24} />
					Start
				</StartCountdownButton>
			</form>
		</HomeContainer>
	);
}
