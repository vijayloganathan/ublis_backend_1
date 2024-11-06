import { UserRepository } from "./users/user-repository";
import { ProfileRepository } from "./profile/profile-repository";
import { StaffRepository } from "./staff/staff-repository";
import { DirectorRepository } from "./directors/director-repository";
import { BatchRepository } from "./batch/birthday-repository";

export class Resolver {
  public userRepository: any;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async userLoginV1(user_data: any, domain_code: any): Promise<any> {
    return await this.userRepository.userLoginV1(user_data, domain_code);
  }
  public async changePasswordV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.userRepository.changePasswordV1(user_data, domain_code);
  }
  public async validateUsers(user_data: any, domain_code: any): Promise<any> {
    return await this.userRepository.validateUsers(user_data, domain_code);
  }
  public async validateUserTokenV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.userRepository.validateTokenData(user_data, domain_code);
  }

  public async userSignUpV1(user_data: any, domain_code: any): Promise<any> {
    return await this.userRepository.userSignUpV1(user_data, domain_code);
  }
  public async validateUserNameV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.userRepository.validateUserNameV1(user_data, domain_code);
  }

  public async userDashBoardDataV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.userRepository.userDashBoardDataV1(
      user_data,
      domain_code
    );
  }
  public async userProfileDataV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.userRepository.userProfileDataV1(user_data, domain_code);
  }
  public async userProfileUpdateV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.userRepository.userProfileUpdateV1(
      user_data,
      domain_code
    );
  }
}

export class ProfileResolver {
  public profileRepository: any;
  constructor() {
    this.profileRepository = new ProfileRepository();
  }

  public async userAddressV1(user_data: any, domain_code: any): Promise<any> {
    return await this.profileRepository.userAddressV1(user_data, domain_code);
  }

  public async userPersonalDataV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.profileRepository.userPersonalDataV1(
      user_data,
      domain_code
    );
  }

  public async userGeneralHealthV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.profileRepository.userGeneralHealthV1(
      user_data,
      domain_code
    );
  }

  public async userRegisterDataV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.profileRepository.userRegisterDataV1(
      user_data,
      domain_code
    );
  }
  public async userRegisterPageDataV1(
    userData: any,
    domainCode: any,
    decodedToken: any
  ): Promise<any> {
    return await this.profileRepository.userRegisterPageDataV1(
      userData,
      domainCode
    );
  }
  public async userMemberListV1(userData: any, domainCode: any): Promise<any> {
    return await this.profileRepository.userMemberListV1(userData, domainCode);
  }
  public async sectionTimeV1(userData: any, domainCode: any): Promise<any> {
    return await this.profileRepository.sectionTimeV1(userData, domainCode);
  }
}

export class FrontDeskResolver {
  public StaffRepository: any;
  constructor() {
    this.StaffRepository = new StaffRepository();
  }
  public async staffDashBoardV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.StaffRepository.staffDashBoardV1(user_data, domain_code);
  }
  public async staffStudentApprovalV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.StaffRepository.staffStudentApprovalV1(
      user_data,
      domain_code
    );
  }

  public async staffApprovalBtnV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.StaffRepository.staffApprovalBtnV1(
      user_data,
      domain_code
    );
  }
  public async staffRejectionBtnV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.StaffRepository.staffRejectionBtnV1(
      user_data,
      domain_code
    );
  }
  public async userSignedUpV1(user_data: any, domain_code: any): Promise<any> {
    return await this.StaffRepository.userSignedUpV1(user_data, domain_code);
  }
  public async userFollowUpV1(user_data: any, domain_code: any): Promise<any> {
    return await this.StaffRepository.userFollowUpV1(user_data, domain_code);
  }
  public async userManagementPageV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.StaffRepository.userManagementPageV1(
      user_data,
      domain_code
    );
  }
  public async userDataUpdateV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    console.log("-------------------------------------------------line 185");
    return await this.StaffRepository.userDataUpdateV1(user_data, domain_code);
  }
  public async ProfileDataV1(user_data: any, domain_code: any): Promise<any> {
    return await this.StaffRepository.ProfileDataV1(user_data, domain_code);
  }

  public async addEmployeeDocumentV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.StaffRepository.addEmployeeDocumentV1(
      user_data,
      domain_code
    );
  }
}

export class DirectorResolver {
  public DirectorRepository: any;
  constructor() {
    this.DirectorRepository = new DirectorRepository();
  }
  public async directorStaffPgV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.DirectorRepository.directorStaffPgV1(
      user_data,
      domain_code
    );
  }
  public async userDataV1(user_data: any, domain_code: any): Promise<any> {
    return await this.DirectorRepository.userDataV1(user_data, domain_code);
  }
  public async therapistApprovalDataV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.DirectorRepository.therapistApprovalDataV1(
      user_data,
      domain_code
    );
  }
  public async approvalButtonV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.DirectorRepository.approvalButtonV1(
      user_data,
      domain_code
    );
  }
  public async userTypeLabelV1(user_data: any, domain_code: any): Promise<any> {
    return await this.DirectorRepository.userTypeLabelV1(
      user_data,
      domain_code
    );
  }
  public async addEmployeeV1(user_data: any, domain_code: any): Promise<any> {
    return await this.DirectorRepository.addEmployeeV1(user_data, domain_code);
  }
  public async addEmployeeDataV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.DirectorRepository.addEmployeeDataV1(
      user_data,
      domain_code
    );
  }
  public async userAuditListV1(user_data: any, domain_code: any): Promise<any> {
    return await this.DirectorRepository.userAuditListV1(
      user_data,
      domain_code
    );
  }
  public async staffAuditListV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.DirectorRepository.staffAuditListV1(
      user_data,
      domain_code
    );
  }
  public async userUpdateAuditListV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.DirectorRepository.userUpdateAuditListV1(
      user_data,
      domain_code
    );
  }
  public async userUpdateAuditListReadV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.DirectorRepository.userUpdateAuditListReadV1(
      user_data,
      domain_code
    );
  }
  public async userDataListApprovalV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.DirectorRepository.userDataListApprovalV1(
      user_data,
      domain_code
    );
  }
  public async userDataUpdateApprovalBtnV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.DirectorRepository.userDataUpdateApprovalBtnV1(
      user_data,
      domain_code
    );
  }
  public async userDataUpdateRejectBtnV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.DirectorRepository.userDataUpdateRejectBtnV1(
      user_data,
      domain_code
    );
  }
  public async feesStructureV1(user_data: any, domain_code: any): Promise<any> {
    return await this.DirectorRepository.feesStructureV1(
      user_data,
      domain_code
    );
  }
  public async addFeesStructureV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.DirectorRepository.addFeesStructureV1(
      user_data,
      domain_code
    );
  }
  public async addNewFeesStructureV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.DirectorRepository.addNewFeesStructureV1(
      user_data,
      domain_code
    );
  }
  public async editFeesStructureV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.DirectorRepository.editFeesStructureV1(
      user_data,
      domain_code
    );
  }
  public async deleteFeesStructureV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.DirectorRepository.deleteFeesStructureV1(
      user_data,
      domain_code
    );
  }
  public async offerStructureV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.DirectorRepository.offerStructureV1(
      user_data,
      domain_code
    );
  }
  public async addNewOffersStructureV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.DirectorRepository.addNewOffersStructureV1(
      user_data,
      domain_code
    );
  }
  public async editOfferStructureV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.DirectorRepository.editOfferStructureV1(
      user_data,
      domain_code
    );
  }
  public async deleteOfferStructureV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.DirectorRepository.deleteOfferStructureV1(
      user_data,
      domain_code
    );
  }
}
export class BatchProgramResolver {
  public BatchRepository: any;
  constructor() {
    this.BatchRepository = new BatchRepository();
  }
  public async BirthdayRepositoryV1(
    user_data: any,
    domain_code: any
  ): Promise<any> {
    return await this.BatchRepository.BirthdayRepositoryV1(
      user_data,
      domain_code
    );
  }
}
