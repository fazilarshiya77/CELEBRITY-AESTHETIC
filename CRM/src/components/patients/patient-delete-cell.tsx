"use client"

import { deletePatient } from "@/actions/patients"
import { DeleteButton } from "@/components/shared/delete-button"

export function PatientDeleteCell({ patientId, patientName }: { patientId: string; patientName: string }) {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <DeleteButton
        description={`This will permanently delete ${patientName} and all associated records (appointments, billing, EMR, etc.). This action cannot be undone.`}
        onDelete={() => deletePatient(patientId)}
      />
    </div>
  )
}
