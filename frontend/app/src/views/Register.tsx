import React, { useState } from 'react';

interface FormState {
	userId: string;
	password: string;
	email: string;
	icon: File | null;
	isAdmin: boolean;
}

type RegisterProps = {
	isAdmin: boolean
}

const initialFormState: FormState = {
	userId: '',
	password: '',
	email: '',
	icon: null,
	isAdmin: false,
};


export const Register: React.FC<RegisterProps> = ({isAdmin}) => {
	const [formData, setFormData] = useState<FormState>(initialFormState);

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]:value,
		});
	};

	const handleIconChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
		const file = event.target.files && event.target.files[0];
		setFormData({
			...formData,
			icon:file || null,
		});
	};

	return (
		<div>
			<form>
				<div>
					<label>
						User ID:
						<input
							type="text"
							name="userId"
							value={formData.userId}
							onChange={handleInputChange}
						/>
					</label>
				</div>
				<div>
					<label>
						Password:
						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={handleInputChange}
						/>
					</label>
				</div>
				<div>
					<label>
						Email:
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
						/>
					</label>
				</div>
				<div>
					<label>
						Icon (PNG or JPEG):
						<input
							type="file"
							name="icon"
							accept=".png, .jpg, .jpeg"
							onChange={handleIconChange}
						/>
					</label>
				</div>
				{isAdmin && (
					<div>
						<label>
							管理者として登録
							<input 
								type="checkbox"
								name="isAdmin"
								checked={formData.isAdmin}
								onChange={(e) => setFormData({...formData, isAdmin: e.target.checked })}
							/>
						</label>
					</div>
				)}
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Register;