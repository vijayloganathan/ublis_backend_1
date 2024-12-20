const label = {
  refStFName: "First Name",
  refStLName: "Last Name",
  refStMName: "Middle Name",
  refStDOB: "Date Of Birth",
  refStSex: "Gender",
  refStAge: "Age",
  refQualification: "Qualification",
  refOccupation: "Occupation",
  refProfilePath: "Profile Image",
  refSessionType: "Session Type",
  refTimingId: "Preferred Timing",
  refguardian: "Father / Husband Name",
  reftherapist: "Therapist",
  refCtMobile: "Contact Mobile Number",
  refCtEmail: "Contact Email Address",
  refCtWhatsapp: "WhatsApp Contact Number",
  refAdAdd1: "Permanent Address",
  refAdCity1: "Permanent Address City",
  refAdState1: "Permanent Address State",
  refAdPincode1: "Permanent Address Pincode",
  refAdAdd2: "Temporary Address",
  refAdCity2: "Temporary Address City",
  refAdState2: "Temporary Address State",
  refAdPincode2: "Temporary Address Pincode",
  refHeight: "Height",
  refWeight: "Weight",
  refBlood: "Blood Group",
  refBMI: "BMI",
  refBP: "Blood Pressure",
  refRecentInjuries: "Recent Injuries",
  refRecentInjuriesReason: "Reason For Recent Injuries",
  refRecentFractures: "Recent Fractures",
  refRecentFracturesReason: "Reason For Recent Fractures",
  refOthers: "Other Information In General Health Details",
  refElse: "Additional Information For General Health Details",
  refPerHealthId: "Personal Health",
  refMedicalDetails: "Medical Details",
  refUnderPhysCare: "Under Physical Care",
  refDrName: "Doctor's Name",
  refHospital: "Hospital",
  refBackpain: "Back Pain Details",
  refProblem: "Present Health Problem",
  refPastHistory: "Past Medical History",
  refFamilyHistory: "Family Medical History",
  refAnythingelse: "Additional Comments In Present Health",
  refOtherActivities: "Other Activities",
  refUserName: "Username",
  refUcPreference: "Communication Preference",
  refExperence: "Experence",
  refSpecialization: "Specialization",
  refPanPath: "Pan Card",
  refAadharPath: "Aadhar Card ",
  refCertificationPath: "Certification",
  refWorkingTime: "Working Time",
  refFeedback: "Feed Back",
  refPerformance: "Performance",
  refMaritalStatus: "Marital Status",
  refWeddingDate: "Wedding Date",
};

export function reLabelText(key: string): string {
  return label[key as keyof typeof label] || "Label not found";
}
