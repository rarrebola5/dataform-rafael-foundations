const pj_orch = dataform.projectConfig.vars.base_pj_id + '-orch-' + dataform.projectConfig.vars.executionSetting;
const pj_lz   = dataform.projectConfig.vars.base_pj_id + '-lz-'   + dataform.projectConfig.vars.executionSetting;
const pj_raw  = dataform.projectConfig.vars.base_pj_id + '-raw-'  + dataform.projectConfig.vars.executionSetting;
const pj_dwh  = dataform.projectConfig.vars.base_pj_id + '-dwh-'  + dataform.projectConfig.vars.executionSetting;
const pj_dm   = dataform.projectConfig.vars.base_pj_id + '-dm-'   + dataform.projectConfig.vars.executionSetting;

module.exports = {
    pj_orch,
    pj_lz,
    pj_raw,
    pj_dwh,
    pj_dm
};
