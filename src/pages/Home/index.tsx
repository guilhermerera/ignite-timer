import { useState } from "react";
import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
	CountdownContainer,
	FormContainer,
	HomeContainer,
	MinutesAmountInput,
	Separator,
	StartCountdownButton,
	TaskInput
} from "./styles";
const newCycleFormValidationSchema = zod.object({
	task: zod.string().min(1, "Informe a tarefa"),
	minutesAmount: zod
		.number()
		.min(5, "O ciclo precisa ser de no mínimo 5 minutos.")
		.max(60, "O ciclo precisa ser de no máximo 60 minutos.")
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

interface Cycle {
	id: string;
	task: string;
	minutesAmount: number;
}

export function Home() {
	const [cycles, setCycles] = useState<Cycle[]>([]);
	const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
	const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

	const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
		resolver: zodResolver(newCycleFormValidationSchema),
		defaultValues: {
			task: "",
			minutesAmount: 0
		}
	});

	function handleCreateNewCycle(data: NewCycleFormData) {
		const id = String(new Date().getTime());

		const newCycle: Cycle = {
			id,
			task: data.task,
			minutesAmount: data.minutesAmount
		};

		setCycles((state) => [...state, newCycle]);
		setActiveCycleId(id);

		reset();
	}

	const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

	const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
	const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

	const minutesAmount = Math.floor(currentSeconds / 60);
	const secondsAmount = currentSeconds % 60;

	const minutes = String(minutesAmount).padStart(2, "0");
	const seconds = String(secondsAmount).padStart(2, "0");

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
					<span>{minutes[0]}</span>
					<span>{minutes[1]}</span>
					<Separator>:</Separator>
					<span>{seconds[0]}</span>
					<span>{seconds[1]}</span>
				</CountdownContainer>

				<StartCountdownButton disabled={shouldSubmitBeDisabled} type='submit'>
					<Play size={24} />
					Start
				</StartCountdownButton>
			</form>
		</HomeContainer>
	);
}
